import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormCraft AI - Build Forms in Seconds",
  description: "AI Powered Form Builder using Gemini",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-screen overflow-hidden"
    >
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 h-screen flex flex-col justify-between overflow-hidden antialiased transition-colors duration-200`}
      >
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1 flex flex-col justify-center items-center px-4 overflow-y-auto">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
