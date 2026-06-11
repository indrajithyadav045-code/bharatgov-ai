"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { type: "bot", text: "Hi! I am BharatGov AI. Ask me about government schemes." },
  ]);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    const userText = msg;
    setChat((prev) => [...prev, { type: "user", text: userText }]);
    setMsg("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });

    const data = await res.json();
    setChat((prev) => [...prev, { type: "bot", text: data.reply }]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-16 h-16 rounded-full shadow-2xl z-50 text-2xl"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-[350px] h-[480px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border text-black">
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl font-bold">
            BharatGov AI Assistant
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {chat.map((item, index) => (
              <div
                key={index}
                className={`mb-3 p-3 rounded-xl ${
                  item.type === "user"
                    ? "bg-blue-600 text-white ml-8"
                    : "bg-green-100 text-black mr-8"
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask about schemes..."
              className="flex-1 border p-2 rounded-lg text-black"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
