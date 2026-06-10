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

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi (NCT)",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const needs = [
    "Scholarship",
    "Education",
    "Student Loan",
    "Research & Innovation",
    "Health Care",
    "Healthcare Insurance",
    "Employment",
    "Self Employment",
    "Skill Development",
    "Business Loan",
    "MSME Support",
    "Startup Support",
    "Agriculture",
    "Farmer Subsidies",
    "Housing",
    "Women Empowerment",
    "Women Entrepreneurship",
    "Senior Citizen Welfare",
    "Disability Support",
    "Child Welfare",
    "Youth Development",
    "Minority Welfare",
    "Tribal Welfare",
    "Social Security",
    "Pension Schemes",
    "Rural Development",
    "Urban Development",
    "Digital Services",
    "Financial Assistance",
    "Green Energy",
  ];

  const handleSubmit = () => {
    const query = new URLSearchParams({
      age,
      state,
      income,
      category,
      occupation,
      need,
    }).toString();

    router.push(`/results?${query}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          BharatGov AI Assistant
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Find the right government schemes across India in seconds
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          />

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          >
            <option value="">Select State / Union Territory</option>
            {states.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Annual Income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          >
            <option value="">Select Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            <option>EWS</option>
            <option>Minority</option>
            <option>PwD</option>
          </select>

          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          >
            <option value="">Select Occupation</option>
            <option>Student</option>
            <option>Farmer</option>
            <option>Unemployed</option>
            <option>Private Employee</option>
            <option>Government Employee</option>
            <option>Business Owner</option>
            <option>Entrepreneur</option>
            <option>Homemaker</option>
            <option>Senior Citizen</option>
            <option>Person with Disability</option>
          </select>

          <select
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          >
            <option value="">Select Need / Support Type</option>
            {needs.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition"
        >
          Check Eligibility
        </button>
      </div>
    </main>
  );
}
