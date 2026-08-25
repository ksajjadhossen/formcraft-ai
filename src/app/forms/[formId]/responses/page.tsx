import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Inbox, Calendar, UserCheck } from "lucide-react";

interface ResponsesPageProps {
  params: Promise<{
    formId: string;
  }>;
}

export default async function FormResponsesPage({
  params,
}: ResponsesPageProps) {
  const resolvedParams = await params;
  const formId = resolvedParams.formId;

  if (!formId) {
    notFound();
  }

  const form = await prisma.form.findUnique({
    where: { id: formId },
    include: {
      questions: true,
      responses: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!form) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-1">
            <Link
              href="/forms"
              className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-2 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Forms
            </Link>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {form.title} - Responses
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {form.description ||
                "Review all submissions collected from your users."}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-600/10 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Total Submissions
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                {form.responses.length}
              </p>
            </div>
          </div>
        </div>

        {/* Responses List Section */}
        {form.responses.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              No responses yet
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              Share your form link with users to start collecting responses
              here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {form.responses.map((response: any, index: number) => {
              const answers = response.answers as Record<string, any>;

              return (
                <div
                  key={response.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xl space-y-4 transition-all"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-purple-100 dark:bg-purple-600/10 text-purple-600 dark:text-purple-400 rounded-full">
                      Submission #{form.responses.length - index}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(response.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {form.questions.map((q: any) => {
                      const answerValue = answers[q.id] || "No answer provided";

                      return (
                        <div
                          key={q.id}
                          className="bg-slate-50 dark:bg-slate-950/50 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800/60 space-y-1"
                        >
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {q.label || q.text}
                          </p>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {String(answerValue)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
