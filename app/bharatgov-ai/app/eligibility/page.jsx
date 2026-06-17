"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EligibilityPage() {
  const router = useRouter();

  const [language, setLanguage] = useState("English");
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
    "Business Loan",
    "Agriculture",
    "Housing",
    "Senior Citizen Welfare",
    "Health Care",
  ];

  const handleSubmit = () => {
    const query = new URLSearchParams({
      age,
      state,
      income,
      category,
      occupation,
      need,
      language,
    }).toString();

    router.push(`/results?${query}`);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    background: "#f8fafc",
    color: "#111827",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #dcfce7)",
        padding: "40px 20px",
        color: "#111827",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          borderRadius: "28px",
          padding: "35px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "42px", color: "#1d4ed8", marginBottom: "8px" }}>
          Check Your Eligibility
        </h1>

        <p style={{ textAlign: "center", color: "#475569", marginBottom: "30px" }}>
          Fill your details and let BharatGov AI find the best scheme for you
        </p>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Select Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} style={inputStyle}>
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
            <option>Telugu</option>
            <option>Malayalam</option>
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          <input style={inputStyle} type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />

          <select style={inputStyle} value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select State / UT</option>
            {states.map((s) => <option key={s}>{s}</option>)}
          </select>

          <input style={inputStyle} type="number" placeholder="Annual Income" value={income} onChange={(e) => setIncome(e.target.value)} />

          <select style={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            <option>EWS</option>
            <option>Minority</option>
          </select>

          <select style={inputStyle} value={occupation} onChange={(e) => setOccupation(e.target.value)}>
            <option value="">Select Occupation</option>
            <option>Student</option>
            <option>Farmer</option>
            <option>Business Owner</option>
            <option>Senior Citizen</option>
            <option>Unemployed</option>
          </select>

          <select style={inputStyle} value={need} onChange={(e) => setNeed(e.target.value)}>
            <option value="">Select Need / Support Type</option>
            {needs.map((n) => <option key={n}>{n}</option>)}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "28px",
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
            border: "none",
            background: "#1d4ed8",
            color: "white",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(29,78,216,0.3)",
          }}
        >
          Check Eligibility →
        </button>

        <div
          style={{
            marginTop: "22px",
            background: "#dcfce7",
            padding: "14px",
            borderRadius: "12px",
            textAlign: "center",
            color: "#166534",
            fontWeight: "600",
          }}
        >
          🔒 Your information is secure and used only for scheme recommendation.
        </div>
      </div>
    </main>
  );
}
