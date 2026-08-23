"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  const pathname = usePathname();
  const username = "ksajjadhossen";
  const currentYear = new Date().getFullYear();

  if (pathname === "/create-form") {
    return null;
  }
  if (pathname === "/create-form" || pathname === "/dashboard") {
    return null;
  }

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md text-slate-600 dark:text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white"
          >
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span>FormCraft AI</span>
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Build intelligent, customized forms in seconds using advanced AI
            technology and real-time analytics.
          </p>
        </div>

        {/* Product Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900 dark:text-slate-200 text-xs uppercase tracking-wider">
            Product
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link
                href="/create-form"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                AI Generator
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Pro Plans
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900 dark:text-slate-200 text-xs uppercase tracking-wider">
            Resources
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link
                href="/docs"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/templates"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Form Templates
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900 dark:text-slate-200 text-xs uppercase tracking-wider">
            Legal
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link
                href="/privacy"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} FormCraft AI. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href={`https://x.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href={`https://linkedin.com/in/${username}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
