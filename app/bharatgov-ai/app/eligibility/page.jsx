"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EligibilityPage() {
  const router = useRouter();

  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [occupation, setOccupation] = useState("");
  const [need, setNeed] = useState("");

  const handleSubmit = () => {
    router.push(
      `/results?age=${age}&state=${state}&income=${income}&category=${category}&occupation=${occupation}&need=${need}`
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          BharatGov AI Assistant
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Find the right government schemes in seconds
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-3 rounded-lg text-black"
          />

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border p-3 rounded-lg text-black"
          >
            <option value="">Select State / UT</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Delhi (NCT)</option>
            <option>Puducherry</option>
          </select>

          <input
            type="number"
            placeholder="Annual Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border p-3 rounded-lg text-black"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded-lg text-black"
          >
            <option value="">Select Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            <option>EWS</option>
          </select>

          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="border p-3 rounded-lg text-black"
          >
            <option value="">Select Occupation</option>
            <option>Student</option>
            <option>Farmer</option>
            <option>Unemployed</option>
            <option>Private Employee</option>
            <option>Business Owner</option>
          </select>

          <select
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="border p-3 rounded-lg text-black"
          >
            <option value="">Select Need</option>
            <option>Scholarship</option>
            <option>Health Care</option>
            <option>Employment</option>
            <option>Agriculture</option>
            <option>Housing</option>
            <option>Startup Support</option>
          </select>

        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl"
        >
          Check Eligibility
        </button>

      </div>
    </main>
  );
}