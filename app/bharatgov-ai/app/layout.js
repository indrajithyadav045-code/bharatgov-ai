import "./globals.css";

export const metadata = {
  title: "BharatGov AI",
  description: "AI-Powered Citizen Copilot for Government Scheme Discovery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
