import Link from "next/link";
import { FileText, ArrowUpRight, Calendar, Layers } from "lucide-react";

interface FormCardProps {
  form: {
    id: string;
    title: string;
    description?: string | null;
    createdAt: Date;
    questions?: any[];
  };
}

export default function FormCard({ form }: FormCardProps) {
  return (
    <div className="group relative bg-white/2 hover:bg-white/4 border border-white/10 hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-2xl shadow-black/40">
      {/* Card Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            {form.questions?.length || 0} Questions
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-1">
            {form.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {form.description || "No description provided for this form."}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          <span>{new Date(form.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/forms/${form.id}`}
            target="_blank"
            className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 transition-colors"
            title="View Public Form"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
