"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
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
    Scholarship: {
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
    Education: {
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
    "Health Care": {
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
    Employment: {
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
    Agriculture: {
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
    Housing: {
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
    "Women Empowerment": {
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
    "Startup Support": {
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
    "Skill Development": {
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
    "Senior Citizen Welfare": {
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
    "Disability Support": {
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
  };

  const selectedScheme =
    schemeMap[userData.need] || {
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
            This is an MVP result. In the final hackathon version, BharatGov AI
            will use a scheme database, eligibility rules, and AI matching engine
            to recommend more accurate government schemes.
          </p>
        </section>
      </div>
    </main>
  );
}