"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateFormAction(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Create a structured form JSON based on this prompt: "${prompt}". Return only a valid JSON containing fields with label, type, placeholder, and options if needed.`,
    });

    return { success: true, data: response.text };
  } catch (error) {
    console.error("AI Generation Error:", error);
    return { success: false, error: "Failed to generate form using AI." };
  }
}
