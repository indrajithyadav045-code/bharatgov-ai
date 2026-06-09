import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        BharatGov AI Assistant
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Find government schemes, check eligibility, generate application
        guidance and get assistance in your preferred language.
      </p>

      <Link
        href="/eligibility"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Get Started
      </Link>

    </main>
  );
}