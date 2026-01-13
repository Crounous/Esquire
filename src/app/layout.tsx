import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "Try",
    template: "%s · Try",
  },
  description: "A Next.js + Tailwind app bootstrapped with Bun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
