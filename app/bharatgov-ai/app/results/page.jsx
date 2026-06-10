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
      name: "National Scholarship Portal",
      website: "https://scholarships.gov.in",
      description:
        "Helps students apply for central and state scholarship schemes.",
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
      website: "https://scholarships.gov.in",
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
      name: "Vidya Lakshmi Education Loan Portal",
      website: "https://www.vidyalakshmi.co.in",
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
      name: "Startup India / Innovation Support",
      website: "https://www.startupindia.gov.in",
      description:
        "Supports students, researchers, and innovators with funding, mentorship, and innovation opportunities.",
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
      website: "https://beneficiary.nha.gov.in",
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
      website: "https://pmjay.gov.in",
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
      website: "https://www.kviconline.gov.in/pmegpeportal",
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
      website: "https://www.kviconline.gov.in/pmegpeportal",
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
      website: "https://www.pmkvyofficial.org",
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
      website: "https://www.mudra.org.in",
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
      name: "MSME Udyam Registration / Support",
      website: "https://udyamregistration.gov.in",
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
      website: "https://www.startupindia.gov.in",
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
      website: "https://pmkisan.gov.in",
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
      name: "PM Kisan / Farmer Subsidy Support",
      website: "https://pmkisan.gov.in",
      description:
        "Supports farmers with subsidy assistance for seeds, equipment, irrigation, and agricultural needs.",
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
      website: "https://pmaymis.gov.in",
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
      name: "Women Welfare Schemes",
      website: "https://www.myscheme.gov.in",
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
      website: "https://www.standupmitra.in",
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
      website: "https://nsap.nic.in",
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
      name: "Disability Welfare Support",
      website: "https://depwd.gov.in",
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
      website: "https://wcd.nic.in",
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
      name: "Nehru Yuva Kendra Youth Development",
      website: "https://nyks.nic.in",
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
      name: "Minority Welfare Scholarship / Support",
      website: "https://www.minorityaffairs.gov.in",
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
      website: "https://tribal.nic.in",
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
      website: "https://nsap.nic.in",
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
      website: "https://www.india.gov.in/spotlight/atal-pension-yojana",
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
      website: "https://nrega.nic.in",
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
      website: "https://pmsvanidhi.mohua.gov.in",
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
      name: "Digital India Services",
      website: "https://www.digitalindia.gov.in",
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
      name: "MyScheme Financial Assistance Search",
      website: "https://www.myscheme.gov.in",
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
      website: "https://www.pmsuryaghar.gov.in",
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
      website: "https://www.myscheme.gov.in",
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

          <a
            href={selectedScheme.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl"
          >
            Apply Now / Official Website
          </a>
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
