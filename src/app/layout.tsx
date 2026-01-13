import type { Metadata } from "next";
import { Jost, Merriweather } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Try",
    template: "%s · Try",
  }
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
