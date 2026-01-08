import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Math Templates - Problem Solver",
  description: "Interactive math problem solving templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-20 sm:pb-24">
        {children}
        <Footer />
      </body>
    </html>
  );
}
