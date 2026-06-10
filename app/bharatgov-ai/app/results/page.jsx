
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ResultsContent() {
  const params = useSearchParams();

  const userData = {
    age: params.get("age") || "Not provided",
    state: params.get("state") || "Not provided",
    income: params.get("income") || "Not provided",
    category: params.get("category") || "Not provided",
    occupation: params.get("occupation") || "Not provided",
    need: params.get("need") || "Not provided",
  };

  const schemeMap = {
    Scholarship: "Post Matric Scholarship Scheme",
    Education: "National Scholarship Portal Education Support",
    "Health Care": "Ayushman Bharat Health Support",
    Employment: "PM Employment Generation Programme",
    Agriculture: "PM Kisan Samman Nidhi",
    Housing: "PM Awas Yojana",
    "Startup Support": "Startup India Support Scheme",
  };

  const schemeName =
    schemeMap[userData.need] || "General Government Welfare Scheme";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-6 text-black">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Eligible Scheme Results
        </h1>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl"><b>Age:</b> {userData.age}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>State / UT:</b> {userData.state}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>Income:</b> ₹{userData.income}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>Category:</b> {userData.category}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>Occupation:</b> {userData.occupation}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>Need:</b> {userData.need}</div>
        </div>

        <section className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Recommended Scheme
          </h2>
          <h3 className="text-xl font-semibold">{schemeName}</h3>
          <p className="text-gray-700 mt-3">
            Based on your profile, BharatGov AI suggests this scheme category.
          </p>
        </section>

        <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">
            Required Documents
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aadhaar Card</li>
            <li>Income Certificate</li>
            <li>Bank Passbook</li>
            <li>Address Proof</li>
            <li>Category Certificate if applicable</li>
          </ul>
        </section>

        <section className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            Application Steps
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Visit the official government portal.</li>
            <li>Register or login with mobile number.</li>
            <li>Fill your personal and eligibility details.</li>
            <li>Upload documents.</li>
            <li>Submit and save acknowledgment number.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-black">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
