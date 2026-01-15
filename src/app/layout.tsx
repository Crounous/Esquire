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
    default: "Esquire",
    template: "%s · Esquire",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${jost.variable} antialiased` + ` ${merriweather.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
