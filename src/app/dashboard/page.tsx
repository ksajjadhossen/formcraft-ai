import { FileText, Users, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentForms from "@/components/dashboard/RecentForms";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Dashboard Header Component */}
      <DashboardHeader />

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatsCard
          title="Total Forms"
          value="0"
          subtitle="All created forms"
          icon={<FileText className="w-4 h-4 text-purple-500" />}
          badge="+0% this month"
        />
        <StatsCard
          title="Total Responses"
          value="0"
          subtitle="User submissions"
          icon={<Users className="w-4 h-4 text-blue-500" />}
          badge="0 total"
        />
        <StatsCard
          title="Completion Rate"
          value="0%"
          subtitle="Average submission rate"
          icon={<TrendingUp className="w-4 h-4 text-emerald-500" />}
          badge="Optimal"
        />
      </div>

      {/* Recent Forms & Quick Generator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentForms />
        </div>

        {/* Improved Quick Generator Card */}
        <div className="p-6 bg-gradient-to-br from-purple-900/90 via-slate-900 to-slate-950 border border-purple-500/20 rounded-xl text-white flex flex-col justify-between shadow-lg">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/20 border border-purple-400/30 rounded-md text-purple-300 text-xs font-semibold tracking-wide">
              <Zap className="w-3.5 h-3.5 fill-purple-300" /> AI Assistant
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Quick Generator
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Describe your form needs and generate fields instantly using
                Gemini AI.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/create-form"
              className="block text-center w-full bg-white text-slate-950 hover:bg-slate-100 font-semibold py-2.5 rounded-lg text-xs shadow-md transition-all active:scale-[0.98]"
            >
              Create Form Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
