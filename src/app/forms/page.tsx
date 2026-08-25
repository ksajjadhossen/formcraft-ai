import { Suspense } from "react";
import { prisma } from "@/lib/db/prisma";
import FormsSearchList from "@/components/forms/FormsSearchList";
import FormsHeader from "../../components/forms/FormsHeader";
import SidebarLayout from "@/components/dashboard/SidebarLayout";
import Loader from "@/components/ui/Loader";

async function FormsContent() {
  const forms = await prisma.form.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      questions: true,
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex transition-colors duration-300">
      <SidebarLayout />

      <main className="flex-1 px-6 sm:px-10 py-10 space-y-8 overflow-y-auto">
        <FormsHeader />
        <FormsSearchList initialForms={forms} />
      </main>
    </div>
  );
}

export default function FormsDashboardPage() {
  return (
    <Suspense fallback={<Loader text="Loading Forms..." />}>
      <FormsContent />
    </Suspense>
  );
}
