import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import FormHeader from "@/components/public-form/FormHeader";
import FormFieldList from "@/components/public-form/FormFieldList";
import { Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-purple-500 selection:text-white flex flex-col justify-between py-12 px-4 sm:px-6 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-purple-600/10 dark:bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-xl w-full mx-auto space-y-6 relative z-10">
        <FormHeader title={form.title} description={form.description} />

        <FormFieldList formId={form.id} questions={form.questions} />

        <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-4 flex items-center justify-center gap-1.5">
          <span>Powered by</span>
          <a
            href="https://formcraft-ai-k.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center gap-1 transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            FormCraft AI
          </a>
        </div>
      </div>
    </div>
  );
}
