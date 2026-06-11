"use client";

import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am BharatGov AI Assistant. Ask me about scholarships, business loans, farming schemes, health support, housing, or pensions.",
    },
  ]);

  const [input, setInput] = useState("");

  const getBotReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("scholarship") || q.includes("student") || q.includes("education")) {
      return "You can explore the National Scholarship Portal. Keep Aadhaar Card, Income Certificate, Bank Passbook, Bonafide Certificate, and previous marksheet ready.";
    }

    if (q.includes("business") || q.includes("loan") || q.includes("mudra")) {
      return "For business support, you can check Pradhan Mantri Mudra Yojana. It helps small businesses and micro enterprises get financial support.";
    }

    if (q.includes("farmer") || q.includes("agriculture") || q.includes("kisan")) {
      return "For farming support, PM Kisan Samman Nidhi may be useful. You may need Aadhaar, land records, bank passbook, and farmer registration details.";
    }

    if (q.includes("health") || q.includes("hospital") || q.includes("medical")) {
      return "For healthcare support, Ayushman Bharat PM-JAY provides health coverage for eligible families. Aadhaar, ration card, and family details may be needed.";
    }

    if (q.includes("house") || q.includes("housing") || q.includes("awas")) {
      return "For housing support, PM Awas Yojana helps eligible citizens access affordable housing assistance. Income certificate, Aadhaar, address proof, and bank details may be required.";
    }

    if (q.includes("pension") || q.includes("senior") || q.includes("old")) {
      return "For pension support, you can check Atal Pension Yojana or National Social Assistance Programme. Age proof, Aadhaar, income certificate, and bank passbook may be needed.";
    }

    if (q.includes("women") || q.includes("female") || q.includes("entrepreneur")) {
      return "For women support, you can explore women welfare schemes and Stand Up India for women entrepreneurship. Aadhaar, income proof, and business plan may be required.";
    }

    return "I can help with scholarships, farming schemes, business loans, healthcare, housing, pensions, women welfare, and skill development. Please ask your need clearly.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-6 text-black">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-2">
          BharatGov AI Chat Assistant
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Ask questions about government schemes and get instant guidance.
        </p>

        <div className="h-[450px] overflow-y-auto bg-gray-50 rounded-2xl p-4 border mb-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-green-100 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ask: I am a student, which scholarship can I apply for?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            className="flex-1 border border-gray-300 rounded-xl p-4 text-black"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 rounded-xl"
          >
            Send
          </button>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/eligibility"
            className="text-blue-700 font-semibold hover:underline"
          >
            Go to Eligibility Checker →
          </a>
        </div>
      </div>
    </main>
  );
}
