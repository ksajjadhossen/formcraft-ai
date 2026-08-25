import { Suspense } from "react";
import { FileText, Users, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentForms from "@/components/dashboard/RecentForms";
import SidebarLayout from "@/components/dashboard/SidebarLayout";
import Loader from "@/components/ui/Loader";

async function DashboardContent() {
  const { userId: clerkId } = await auth();

  let totalForms = 0;
  let forms = [];

  if (clerkId) {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        forms: {
          orderBy: { createdAt: "desc" },
          include: {
            responses: true,
            questions: true,
          },
        },
      },
    });

    if (user) {
      forms = user.forms;
      totalForms = forms.length;
    }
  }

  const totalResponses = forms.reduce(
    (acc, form) => acc + form.responses.length,
    0,
  );

  const completionRate =
    totalForms > 0
      ? Math.min(Math.round((totalResponses / (totalForms * 5)) * 100), 100)
      : 0;

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-main) flex transition-colors duration-300">
      <SidebarLayout />

      <main className="flex-1 px-6 sm:px-10 py-10 space-y-8 overflow-y-auto">
        <DashboardHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StatsCard
            title="Total Forms"
            value={totalForms.toString()}
            subtitle="All created forms"
            icon={<FileText className="w-4 h-4 text-purple-500" />}
            badge="Active"
          />
          <StatsCard
            title="Total Responses"
            value={totalResponses.toString()}
            subtitle="User submissions"
            icon={<Users className="w-4 h-4 text-blue-500" />}
            badge="Total"
          />
          <StatsCard
            title="Completion Rate"
            value={`${completionRate}%`}
            subtitle="Average submission rate"
            icon={<TrendingUp className="w-4 h-4 text-emerald-500" />}
            badge="Optimal"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentForms forms={forms} />
          </div>

          <div className="p-6 bg-linear-to-br from-purple-600 via-purple-900 to-slate-900 dark:from-purple-900/90 dark:via-slate-900 dark:to-slate-950 border border-purple-500/20 rounded-2xl text-white flex flex-col justify-between shadow-xl backdrop-blur-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 dark:bg-purple-500/20 border border-white/30 dark:border-purple-400/30 rounded-md text-white dark:text-purple-300 text-xs font-semibold tracking-wide">
                <Zap className="w-3.5 h-3.5 fill-white dark:fill-purple-300" />{" "}
                AI Assistant
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  Quick Generator
                </h3>
                <p className="text-xs text-purple-100 dark:text-slate-300 mt-1 leading-relaxed">
                  Describe your form needs and generate fields instantly using
                  Gemini AI.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/create-form"
                className="block text-center w-full bg-white text-slate-950 hover:bg-slate-100 font-semibold py-2.5 rounded-xl text-xs shadow-md transition-all active:scale-[0.98]"
              >
                Create Form Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<Loader text="Loading Dashboard..." />}>
      <DashboardContent />
    </Suspense>
  );
}
