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

  const text = {
    English: {
      title: "BharatGov AI Assistant",
      subtitle: "Find the right government schemes across India in seconds",
      language: "Select Language",
      age: "Age",
      state: "Select State / Union Territory",
      income: "Annual Income",
      category: "Select Category",
      occupation: "Select Occupation",
      need: "Select Need / Support Type",
      button: "Check Eligibility",
    },
    Tamil: {
      title: "பாரத்Gov AI உதவியாளர்",
      subtitle: "இந்திய அரசுத் திட்டங்களை சில விநாடிகளில் கண்டறியுங்கள்",
      language: "மொழியைத் தேர்ந்தெடுக்கவும்",
      age: "வயது",
      state: "மாநிலம் / யூனியன் பிரதேசம்",
      income: "ஆண்டு வருமானம்",
      category: "பிரிவைத் தேர்ந்தெடுக்கவும்",
      occupation: "தொழிலைத் தேர்ந்தெடுக்கவும்",
      need: "தேவையைத் தேர்ந்தெடுக்கவும்",
      button: "தகுதி சரிபார்க்கவும்",
    },
    Hindi: {
      title: "भारतGov AI सहायक",
      subtitle: "भारत की सही सरकारी योजनाएं कुछ सेकंड में खोजें",
      language: "भाषा चुनें",
      age: "आयु",
      state: "राज्य / केंद्र शासित प्रदेश चुनें",
      income: "वार्षिक आय",
      category: "श्रेणी चुनें",
      occupation: "व्यवसाय चुनें",
      need: "आवश्यकता चुनें",
      button: "पात्रता जांचें",
    },
    Telugu: {
      title: "భారత్Gov AI సహాయకుడు",
      subtitle: "భారతదేశంలోని సరైన ప్రభుత్వ పథకాలను కొన్ని సెకన్లలో కనుగొనండి",
      language: "భాషను ఎంచుకోండి",
      age: "వయస్సు",
      state: "రాష్ట్రం / కేంద్ర పాలిత ప్రాంతం ఎంచుకోండి",
      income: "వార్షిక ఆదాయం",
      category: "వర్గాన్ని ఎంచుకోండి",
      occupation: "వృత్తిని ఎంచుకోండి",
      need: "అవసరం / సహాయం రకాన్ని ఎంచుకోండి",
      button: "అర్హతను తనిఖీ చేయండి",
    },
    Malayalam: {
      title: "ഭാരത്Gov AI സഹായി",
      subtitle: "ഇന്ത്യയിലെ ശരിയായ സർക്കാർ പദ്ധതികൾ സെക്കൻഡുകൾക്കകം കണ്ടെത്തുക",
      language: "ഭാഷ തിരഞ്ഞെടുക്കുക",
      age: "പ്രായം",
      state: "സംസ്ഥാനം / കേന്ദ്രഭരണ പ്രദേശം തിരഞ്ഞെടുക്കുക",
      income: "വാർഷിക വരുമാനം",
      category: "വിഭാഗം തിരഞ്ഞെടുക്കുക",
      occupation: "തൊഴിൽ തിരഞ്ഞെടുക്കുക",
      need: "ആവശ്യം / സഹായ തരം തിരഞ്ഞെടുക്കുക",
      button: "യോഗ്യത പരിശോധിക്കുക",
    },
  };

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
    "Health Care",
    "Employment",
    "Skill Development",
    "Business Loan",
    "Startup Support",
    "Agriculture",
    "Housing",
    "Women Empowerment",
    "Senior Citizen Welfare",
    "Disability Support",
    "Minority Welfare",
    "Pension Schemes",
    "Rural Development",
    "Urban Development",
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
      language,
    }).toString();

    router.push(`/results?${query}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8">
        <div className="mb-6">
          <label className="block text-black font-semibold mb-2">
            {text[language].language}
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white w-full"
          >
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
            <option>Telugu</option>
            <option>Malayalam</option>
          </select>
        </div>

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          {text[language].title}
        </h1>

        <p className="text-center text-gray-600 mb-8">
          {text[language].subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder={text[language].age}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          />

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          >
            <option value="">{text[language].state}</option>
            {states.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder={text[language].income}
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg text-black bg-white"
          >
            <option value="">{text[language].category}</option>
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
            <option value="">{text[language].occupation}</option>
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
            <option value="">{text[language].need}</option>
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
          {text[language].button}
        </button>
      </div>
    </main>
  );
}
