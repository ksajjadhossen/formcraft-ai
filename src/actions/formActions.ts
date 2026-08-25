"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function deleteFormAction(formId: string) {
  try {
    await prisma.form.delete({
      where: { id: formId },
    });

    revalidatePath("/forms");
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete form:", error);
    return { success: false, error: "Failed to delete form" };
  }
}
