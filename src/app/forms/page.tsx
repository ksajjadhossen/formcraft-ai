import { prisma } from "@/lib/db/prisma";

import FormsSearchList from "@/components/forms/FormsSearchList";
import FormsHeader from "./FormsHeader";

export default async function FormsDashboardPage() {
  const forms = await prisma.form.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      questions: true,
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Header Component */}
        <FormsHeader />

        {/* Search & Forms Grid Component */}
        <FormsSearchList initialForms={forms} />
      </div>
    </div>
  );
}
