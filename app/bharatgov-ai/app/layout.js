import "./globals.css";

export const metadata = {
  title: "BharatGov AI",
  description: "AI-Powered Citizen Copilot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
