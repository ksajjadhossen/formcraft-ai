import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formId, answers } = body;
    console.log("Form Submitted Data:", { formId, answers });

    if (!formId || !answers) {
      return NextResponse.json(
        { error: "Form ID and answers are required" },
        { status: 400 },
      );
    }

    const newResponse = await prisma.response.create({
      data: {
        formId,
        answers,
      },
    });

    return NextResponse.json({ success: true, responseId: newResponse.id });
  } catch (error: unknown) {
    console.error("Form Submission Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to submit form";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
