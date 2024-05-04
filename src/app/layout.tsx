"use client";
import { useSearchParams } from "next/navigation";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();

  const background = searchParams.get("background");

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-indigo-950 to-slate-900 flex min-h-screen flex-col items-center justify-start p-8`}
        style={{
          background: background || undefined,
        }}
      >
        {children}
      </body>
    </html>
  );
}
