import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-8 py-6">
      <nav className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-900"></div>
          <div>
            <h1 className="text-xl font-bold text-blue-800">BharatGov AI</h1>
            <p className="text-xs font-semibold">AI assistant for government scheme</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a className="text-blue-700 border-b-2 border-blue-700">Home</a>
          <a>About</a>
          <a>Analytics</a>
          <a>Schemes</a>
          <a>Language</a>
        </div>

        <Link
          href="/eligibility"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow"
        >
          Get Started
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Find government <br />
              <span className="text-blue-700">Schemes</span> in{" "}
              <span className="text-green-700">Seconds</span>
            </h2>

            <p className="mt-5 max-w-xl text-gray-700">
              AI-powered citizen copilot for discovering government benefits,
              checking eligibility, and applying with ease.
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="/eligibility"
                className="bg-blue-700 text-white px-7 py-3 rounded-lg shadow font-semibold"
              >
                Get started
              </Link>
              <Link
                href="/analytics"
                className="border px-7 py-3 rounded-lg shadow font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-10 shadow-xl text-center">
            <h3 className="text-3xl font-bold text-blue-800">BharatGov AI</h3>
            <p className="mt-3 text-gray-700">
              Smart scheme discovery for every citizen
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {[
            ["AI Scheme Discovery", "AI finds relevant schemes for you"],
            ["Eligibility Assessment", "Check eligibility in seconds"],
            ["Multilingual Support", "Available in Indian languages"],
            ["Official Links", "Direct link to official portal"],
            ["Analytics Dashboard", "Insights on scheme usage"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-gray-100 p-5 rounded-xl shadow text-center">
              <h4 className="font-bold text-sm">{title}</h4>
              <p className="text-xs mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-12 text-center">
          <h3 className="text-3xl font-bold">How it Works</h3>
          <p className="text-gray-600 mt-2">Simple steps to find the right scheme</p>

          <div className="grid md:grid-cols-4 gap-5 mt-8">
            {[
              ["1", "Enter Details", "Fill your basic details and requirements"],
              ["2", "AI Analysis", "AI analyzes your profile and finds best schemes"],
              ["3", "Scheme Recommendation", "Get personalized scheme list"],
              ["4", "Apply Online", "Apply directly on official government portals"],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-gray-100 p-5 rounded-xl shadow">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white mx-auto flex items-center justify-center font-bold">
                  {num}
                </div>
                <h4 className="font-bold mt-3">{title}</h4>
                <p className="text-xs text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
