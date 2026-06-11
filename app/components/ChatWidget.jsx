"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!msg) return;

    const userMsg = msg;

    setChat((prev) => [
      ...prev,
      { type: "user", text: userMsg }
    ]);

    setMsg("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMsg,
      }),
    });

    const data = await res.json();

    setChat((prev) => [
      ...prev,
      { type: "bot", text: data.reply }
    ]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-16 h-16 rounded-full shadow-xl z-50"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
            BharatGov AI Assistant
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {chat.map((c, i) => (
              <div key={i} className="mb-3">
                <b>{c.type === "user" ? "You" : "AI"}:</b> {c.text}
              </div>
            ))}
          </div>

          <div className="p-3 flex gap-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="border p-2 flex-1 rounded-lg"
              placeholder="Ask about government schemes..."
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
