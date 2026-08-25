import { prisma } from "@/lib/db/prisma";
import FormsSearchList from "@/components/forms/FormsSearchList";
import FormsHeader from "../../components/forms/FormsHeader";
import SidebarLayout from "@/components/dashboard/SidebarLayout";

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex transition-colors duration-300">
      {/* Left Sidebar */}
      <SidebarLayout />

      {/* Main Content Area */}
      <main className="flex-1 px-6 sm:px-10 py-10 space-y-8 overflow-y-auto">
        {/* Top Header Component */}
        <FormsHeader />

        {/* Search & Forms Grid Component */}
        <FormsSearchList initialForms={forms} />
      </main>
    </div>
  );
}
