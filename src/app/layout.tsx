import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Saffron Palace | Persian & Ottoman Fine Dining",
  description:
    "A culinary journey through Persian and Ottoman traditions. Fine dining in Tehran and Istanbul.",
  keywords: [
    "Persian restaurant",
    "Ottoman cuisine",
    "fine dining",
    "saffron",
    "Tehran",
    "Istanbul",
  ],
  openGraph: {
    title: "Saffron Palace",
    description: "Where Two Empires Meet at the Table",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-cream font-body antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
