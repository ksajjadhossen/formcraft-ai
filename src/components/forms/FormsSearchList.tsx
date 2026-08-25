"use client";

import { useState } from "react";
import { Search, FileText, Plus } from "lucide-react";
import FormCard from "@/components/forms/FormCard";
import Link from "next/link";

interface FormsSearchListProps {
  initialForms: any[];
}

export default function FormsSearchList({
  initialForms,
}: FormsSearchListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredForms = initialForms.filter(
    (form) =>
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (form.description &&
        form.description.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="space-y-8">
      {/* Search & Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search forms by title or description..."
            className="w-full bg-white/3 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/50 backdrop-blur-xl transition-all"
          />
        </div>
        <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/3 border border-white/10 backdrop-blur-xl">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            Total Forms
          </span>
          <span className="text-lg font-bold text-purple-400">
            {filteredForms.length}
          </span>
        </div>
      </div>

      {/* Forms Grid or Empty State */}
      {filteredForms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForms.map((form) => (
            <FormCard key={form.id} form={form} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white/2 border border-white/10 rounded-3xl space-y-4 backdrop-blur-xl">
          <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-200">
              No matching forms found
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try searching with a different keyword or create a new form.
            </p>
          </div>
          <Link
            href="/create-form"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            Create Form Now
          </Link>
        </div>
      )}
    </div>
  );
}
