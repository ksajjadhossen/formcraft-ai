import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import FormHeader from "@/components/public-form/FormHeader";
import FormFieldList from "@/components/public-form/FormFieldList";

interface FormPageProps {
  params: Promise<{
    formId: string;
  }>;
}

export default async function PublicFormPage({ params }: FormPageProps) {
  const resolvedParams = await params;
  const formId = resolvedParams.formId;

  if (!formId) {
    notFound();
  }

  const form = await prisma.form.findUnique({
    where: { id: formId },
    include: {
      questions: true,
    },
  });

  if (!form) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between py-12 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-xl w-full mx-auto space-y-6">
        <FormHeader title={form.title} description={form.description} />
        <FormFieldList questions={form.questions} />
        <div className="text-center text-xs text-slate-400 dark:text-slate-500 pt-4">
          Powered by{" "}
          <a
            href="https://formcraft-ai-k.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
          >
            FormCraft AI
          </a>
        </div>
      </div>
    </div>
  );
}
