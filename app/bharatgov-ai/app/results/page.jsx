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

  const normalizedNeed = userData.need.trim().toLowerCase();

  const schemeMap = {
    scholarship: {
      name: "Post Matric Scholarship Scheme",
      description:
        "Supports students from eligible income and category groups to continue higher education.",
      documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Community / Category Certificate",
        "Bank Passbook",
        "Bonafide Certificate",
        "Previous Year Marksheet",
      ],
    },

    education: {
      name: "National Scholarship Portal Education Support",
      description:
        "Helps eligible students apply for central and state education support schemes.",
      documents: [
        "Aadhaar Card",
        "Student ID",
        "Income Certificate",
        "Bank Passbook",
        "Marksheet",
      ],
    },

    "student loan": {
      name: "Vidya Lakshmi Education Loan Scheme",
      description:
        "Helps students access education loan information and application support.",
      documents: [
        "Aadhaar Card",
        "Admission Letter",
        "Fee Structure",
        "Income Proof",
        "Bank Details",
      ],
    },

    "research & innovation": {
      name: "Research & Innovation Support Scheme",
      description:
        "Supports students, researchers, and innovators with funding and mentorship.",
      documents: [
        "Aadhaar Card",
        "Institution ID",
        "Project Proposal",
        "Academic Proof",
        "Bank Details",
      ],
    },

    "health care": {
      name: "Ayushman Bharat Health Support",
      description:
        "Provides health coverage and medical support for eligible families.",
      documents: [
        "Aadhaar Card",
        "Ration Card",
        "Income Proof",
        "Family Details",
        "Mobile Number",
      ],
    },

    "healthcare insurance": {
      name: "Ayushman Bharat PM-JAY",
      description:
        "Provides health insurance coverage for eligible families.",
      documents: [
        "Aadhaar Card",
        "Ration Card",
        "Family ID",
        "Mobile Number",
      ],
    },

    employment: {
      name: "PM Employment Generation Programme",
      description:
        "Supports youth and unemployed citizens with employment and self-employment opportunities.",
      documents: [
        "Aadhaar Card",
        "Education Certificate",
        "Bank Details",
        "Income Certificate",
        "Project Details",
      ],
    },

    "self employment": {
      name: "PMEGP Self Employment Scheme",
      description:
        "Helps eligible citizens start self-employment or micro-enterprise activities.",
      documents: [
        "Aadhaar Card",
        "Project Report",
        "Bank Passbook",
        "Education Proof",
        "Category Certificate if applicable",
      ],
    },

    "skill development": {
      name: "PM Kaushal Vikas Yojana",
      description:
        "Provides skill training and certification for better employment opportunities.",
      documents: [
        "Aadhaar Card",
        "Education Proof",
        "Address Proof",
        "Bank Details",
        "Passport Size Photo",
      ],
    },

    "business loan": {
      name: "Pradhan Mantri Mudra Yojana",
      description:
        "Provides financial support for small businesses and micro enterprises.",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Business Plan",
        "Bank Statement",
        "Address Proof",
      ],
    },

    "msme support": {
      name: "MSME Support Scheme",
      description:
        "Supports micro, small, and medium enterprises through registration, finance, and business assistance.",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Udyam Registration",
        "Bank Details",
        "Business Proof",
      ],
    },

    "startup support": {
      name: "Startup India Support Scheme",
      description:
        "Helps entrepreneurs access startup recognition, mentorship, and government support.",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Business Plan",
        "Bank Details",
        "Startup Registration Details",
      ],
    },

    agriculture: {
      name: "PM Kisan Samman Nidhi",
      description:
        "Provides financial assistance to eligible farmers for agricultural needs.",
      documents: [
        "Aadhaar Card",
        "Land Records",
        "Bank Passbook",
        "Farmer Registration Details",
      ],
    },

    "farmer subsidies": {
      name: "Farmer Subsidy Support Scheme",
      description:
        "Supports farmers with subsidy assistance for seeds, equipment, irrigation, and other agricultural needs.",
      documents: [
        "Aadhaar Card",
        "Land Records",
        "Farmer ID",
        "Bank Passbook",
        "Purchase Proof if applicable",
      ],
    },

    housing: {
      name: "PM Awas Yojana",
      description:
        "Helps eligible citizens get support for affordable housing.",
      documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Address Proof",
        "Bank Passbook",
        "Property / Land Details",
      ],
    },

    "women empowerment": {
      name: "Mahila Shakti / Women Welfare Scheme",
      description:
        "Supports women through welfare, safety, skill development, and financial assistance programs.",
      documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Bank Passbook",
        "Address Proof",
        "Self Declaration",
      ],
    },

    "women entrepreneurship": {
      name: "Stand Up India Scheme",
      description:
        "Supports women entrepreneurs with business loans and enterprise development support.",
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Business Plan",
        "Bank Details",
        "Category Certificate if applicable",
      ],
    },

    "senior citizen welfare": {
      name: "National Social Assistance Programme",
      description:
        "Provides welfare support and pension-related assistance for eligible senior citizens.",
      documents: [
        "Aadhaar Card",
        "Age Proof",
        "Income Certificate",
        "Bank Passbook",
        "Address Proof",
      ],
    },

    "disability support": {
      name: "Disability Welfare Support Scheme",
      description:
        "Supports persons with disabilities through welfare benefits, assistive support, and financial aid.",
      documents: [
        "Aadhaar Card",
        "Disability Certificate",
        "Income Certificate",
        "Bank Passbook",
        "Address Proof",
      ],
    },

    "child welfare": {
      name: "Integrated Child Development Services",
      description:
        "Provides welfare, nutrition, and development support for children and mothers.",
      documents: [
        "Aadhaar Card",
        "Birth Certificate",
        "Parent ID Proof",
        "Address Proof",
      ],
    },

    "youth development": {
      name: "Nehru Yuva Kendra Youth Development Scheme",
      description:
        "Supports youth development, leadership, community service, and skill-building activities.",
      documents: [
        "Aadhaar Card",
        "Age Proof",
        "Education Proof",
        "Address Proof",
      ],
    },

    "minority welfare": {
      name: "Minority Welfare Scholarship / Support Scheme",
      description:
        "Provides educational and welfare support for eligible minority community citizens.",
      documents: [
        "Aadhaar Card",
        "Minority Certificate",
        "Income Certificate",
        "Bank Passbook",
        "Education Proof",
      ],
    },

    "tribal welfare": {
      name: "Tribal Welfare Support Scheme",
      description:
        "Supports tribal communities through education, livelihood, and welfare assistance.",
      documents: [
        "Aadhaar Card",
        "ST Certificate",
        "Income Certificate",
        "Bank Passbook",
        "Address Proof",
      ],
    },

    "social security": {
      name: "National Social Assistance Programme",
      description:
        "Provides social security assistance for vulnerable citizens.",
      documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Age Proof if applicable",
        "Bank Passbook",
        "Address Proof",
      ],
    },

    "pension schemes": {
      name: "Atal Pension Yojana",
      description:
        "Provides pension support for eligible citizens to improve financial security.",
      documents: [
        "Aadhaar Card",
        "Bank Account Details",
        "Mobile Number",
        "Age Proof",
      ],
    },

    "rural development": {
      name: "MGNREGA Rural Development Support",
      description:
        "Supports rural households through wage employment and livelihood assistance.",
      documents: [
        "Aadhaar Card",
        "Job Card",
        "Bank Passbook",
        "Address Proof",
      ],
    },

    "urban development": {
      name: "PM SVANidhi / Urban Livelihood Scheme",
      description:
        "Supports urban workers, street vendors, and low-income urban citizens.",
      documents: [
        "Aadhaar Card",
        "Vendor ID if applicable",
        "Bank Passbook",
        "Address Proof",
      ],
    },

    "digital services": {
      name: "Digital India Services Support",
      description:
        "Helps citizens access digital governance services and online benefits.",
      documents: [
        "Aadhaar Card",
        "Mobile Number",
        "Email ID",
        "Address Proof",
      ],
    },

    "financial assistance": {
      name: "Direct Benefit Transfer Support",
      description:
        "Helps eligible citizens access financial assistance through government benefit transfer systems.",
      documents: [
        "Aadhaar Card",
        "Bank Passbook",
        "Income Certificate",
        "Address Proof",
      ],
    },

    "green energy": {
      name: "PM Surya Ghar / Green Energy Support",
      description:
        "Supports citizens with clean energy and rooftop solar-related assistance.",
      documents: [
        "Aadhaar Card",
        "Electricity Bill",
        "Address Proof",
        "Bank Details",
      ],
    },
  };

  const selectedScheme =
    schemeMap[normalizedNeed] || {
      name: "General Government Welfare Scheme",
      description:
        "Based on your profile, BharatGov AI suggests checking central and state welfare schemes.",
      documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Bank Passbook",
        "Address Proof",
      ],
    };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-6 text-black">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          Eligible Scheme Results
        </h1>

        <p className="text-gray-600 mb-8">
          Based on your details, BharatGov AI found a suitable government scheme.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl">
            <b>Age:</b> {userData.age}
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <b>State / UT:</b> {userData.state}
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <b>Income:</b> ₹{userData.income}
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <b>Category:</b> {userData.category}
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <b>Occupation:</b> {userData.occupation}
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <b>Need:</b> {userData.need}
          </div>
        </div>

        <section className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Recommended Scheme
          </h2>

          <h3 className="text-xl font-semibold">{selectedScheme.name}</h3>

          <p className="text-gray-700 mt-3">{selectedScheme.description}</p>
        </section>

        <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">
            Required Documents
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {selectedScheme.documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </section>

        <section className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            Application Steps
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Visit the official government scheme portal.</li>
            <li>Register or login using mobile number / Aadhaar.</li>
            <li>Fill personal, income, category, and need-based details.</li>
            <li>Upload the required documents.</li>
            <li>Submit the application.</li>
            <li>Save the acknowledgment number for tracking.</li>
          </ol>
        </section>

        <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            AI Explanation
          </h2>

          <p className="text-gray-700">
            This result is generated using need-based scheme matching. In the
            next version, BharatGov AI will use a real scheme database and Gemini
            AI to provide more accurate recommendations with eligibility
            reasoning.
          </p>
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
