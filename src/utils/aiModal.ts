import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function generateFormWithAI(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Create a structured form JSON based on this prompt: ${prompt}. Include fields like label, type, placeholder, and options if needed.`,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating form with Gemini AI:", error);
    throw error;
  }
}
