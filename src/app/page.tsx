import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center p-6 text-center">
      <h1 className="text-5xl font-extrabold mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        FormCraft AI
      </h1>
      <p className="text-gray-400 max-w-xl text-lg mb-8">
        Generate custom forms in seconds using Gemini AI. Share with your
        audience and get instant analytics.
      </p>
      {userId ? (
        <Link
          href="/dashboard"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-bold transition-all"
        >
          Go to Dashboard
        </Link>
      ) : (
        <div className="flex gap-4">
          <Link
            href="/sign-in"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-bold transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-xl font-bold transition-all"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
