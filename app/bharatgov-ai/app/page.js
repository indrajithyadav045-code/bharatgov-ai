import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-8 py-6">
      <nav className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-800 to-green-700 text-white flex items-center justify-center font-black shadow-lg">
            B
          </div>

         <div className="flex items-center gap-3">
  <img
    src="/logo.png.png"
    alt="BharatGov AI Logo"
    width="70"
    height="70"
  />

  <div>
    <h1 className="text-2xl font-bold text-blue-800">
      BharatGov AI
    </h1>

    <p className="text-xs text-gray-600">
      AI-Powered Citizen Copilot
    </p>
  </div>
</div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="text-blue-700 font-bold">
            Home
          </Link>
          <Link href="/eligibility" className="hover:text-blue-700">
            Eligibility
          </Link>
        </div>

        <Link
          href="/eligibility"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow font-semibold"
        >
          Get Started
        </Link>
      </nav>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-16">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Find Government <br />
            <span className="text-blue-700">Schemes</span> in{" "}
            <span className="text-green-700">Seconds</span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg">
            BharatGov AI helps citizens discover scholarships, welfare schemes,
            healthcare support, business loans, housing schemes, and government
            benefits based on their profile.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/eligibility"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl shadow font-bold"
            >
              Check Eligibility
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">
            AI Citizen Assistant
          </h3>

          <p className="text-gray-700">
            Enter your age, state, income, category, occupation, and need.
            BharatGov AI recommends suitable schemes with required documents and
            official application links.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-5 mt-16 max-w-6xl mx-auto">
        {[
          ["35+", "States & UTs"],
          ["50+", "Government Schemes"],
          ["5", "Languages Supported"],
          ["AI", "Guided Recommendations"],
        ].map(([num, label]) => (
          <div
            key={label}
            className="bg-gray-100 p-6 rounded-2xl text-center shadow"
          >
            <h3 className="text-3xl font-bold text-blue-700">{num}</h3>
            <p className="text-gray-600 mt-2">{label}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto mt-16 pb-16">
        <h3 className="text-3xl font-bold text-center mb-8">How It Works</h3>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            ["1", "Enter Details"],
            ["2", "AI Analysis"],
            ["3", "Get Scheme"],
            ["4", "Apply Online"],
          ].map(([num, title]) => (
            <div
              key={num}
              className="bg-blue-50 p-6 rounded-2xl text-center shadow"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                {num}
              </div>
              <h4 className="font-bold mt-4">{title}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
