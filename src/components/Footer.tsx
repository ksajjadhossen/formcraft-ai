"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  const username = "ksajjadhossen";

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md text-slate-500 dark:text-slate-400 text-xs py-3.5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} FormCraft AI. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="hover:text-slate-900 dark:hover:text-slate-200 transition"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-slate-900 dark:hover:text-slate-200 transition"
          >
            Terms
          </Link>
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              <SiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://x.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              <SiX className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://linkedin.com/in/${username}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
