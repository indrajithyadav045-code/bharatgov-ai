import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata = {
  title: "BharatGov AI",
  description: "AI-Powered Citizen Copilot for Government Scheme Discovery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
