import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage your AI-generated forms and responses.
          </p>
        </div>
        <Link
          href="/create-form"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
        >
          + Create New Form
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Forms
          </h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Responses
          </h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Completion Rate
          </h3>
          <p className="text-3xl font-bold mt-2">0%</p>
        </div>
      </div>
    </div>
  );
}
