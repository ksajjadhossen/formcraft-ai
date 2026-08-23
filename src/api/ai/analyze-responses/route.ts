import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/db/prisma";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

type FormResponseItem = {
  answers: unknown;
};

type FormQuestionItem = {
  id: string;
  label: string;
};

export async function POST(req: Request) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { formId } = await req.json();
    const form = await prisma.form.findUnique({
      where: { id: formId },
      include: { questions: true, responses: true },
    });

    if (!form)
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    if (form.responses.length === 0) {
      return NextResponse.json({
        summary: "No responses collected yet to analyze.",
      });
    }

    const formattedData = form.responses
      .map((r: FormResponseItem, idx: number) => {
        const answersObj = (r.answers || {}) as Record<string, string>;
        const answersText = form.questions
          .map(
            (q: FormQuestionItem) =>
              `Q: ${q.label} -> Answer: ${answersObj[q.id] || "N/A"}`,
          )
          .join("\n");
        return `Response #${idx + 1}:\n${answersText}`;
      })
      .join("\n\n");

    const analyticsPrompt = `You are a lead data analyst. Analyze these form submissions for "${form.title}".
Provide an executive 2-sentence summary detailing key sentiment, trends, strengths, or customer complaints. Concise, professional, actionable.

Submissions Data:
${formattedData}`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(analyticsPrompt);
    const summary = result.response.text().trim();

    return NextResponse.json({
      summary,
      totalResponses: form.responses.length,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to generate sentiment analysis";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
