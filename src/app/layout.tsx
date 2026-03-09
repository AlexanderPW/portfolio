import type { Metadata } from "next";
import { Nunito, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alex Waldrop",
  description:
    "Senior Lead Engineer focused on cloud, reliability, and AI/ML projects. Sailor. Writer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
