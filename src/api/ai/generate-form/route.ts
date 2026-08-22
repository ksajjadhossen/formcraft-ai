import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/db/prisma";
import { z } from "zod";
interface AIQuestion {
  label: string;
  type: "TEXT" | "TEXTAREA" | "SELECT" | "RADIO" | "RATING";
  options?: string[] | null;
  required?: boolean;
}

const requestSchema = z.object({
  prompt: z.string().min(5, "Prompt must be at least 5 characters long"),
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({ where: { clerkId } });
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const formCount = await prisma.form.count({ where: { userId: user.id } });
    if (formCount >= 3 && !user.isPro) {
      return NextResponse.json(
        { error: "Free plan limit reached." },
        { status: 403 },
      );
    }

    const body = await req.json();
    const { prompt } = requestSchema.parse(body);

    const systemPrompt = `You are an expert form builder AI. Generate a JSON form structure based on the user request.
Respond ONLY with raw valid JSON, no markdown formatting, no code blocks.

JSON Structure Requirements:
{
  "title": "Short descriptive form title",
  "description": "Clear 1-sentence form description",
  "questions": [
    {
      "label": "Question text?",
      "type": "TEXT" | "TEXTAREA" | "SELECT" | "RADIO" | "RATING",
      "required": true,
      "options": ["Option 1", "Option 2"]
    }
  ]
}

User Prompt: "${prompt}"`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(systemPrompt);
    const responseText = result.response
      .text()
      .trim()
      .replace(/```json/g, "")
      .replace(/```/g, "");
    const parsedData = JSON.parse(responseText);

    const newForm = await prisma.form.create({
      data: {
        userId: user.id,
        title: parsedData.title,
        description: parsedData.description,
        questions: {
          create: parsedData.questions.map((q: AIQuestion) => ({
            label: q.label,
            type: q.type,
            options: q.options || null,
            required: q.required ?? true,
          })),
        },
      },
      include: { questions: true },
    });

    return NextResponse.json({ success: true, formId: newForm.id });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to generate form";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
