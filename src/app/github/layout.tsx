"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Inter } from "next/font/google";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

function RootLayoutChild({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();

  const background = searchParams.get("background");
  const padding = searchParams.get("padding");

  return (
    <body
      className={`${inter.className} bg-gradient-to-b from-indigo-950 to-slate-900 flex min-h-screen flex-col items-center justify-start p-8`}
      style={{
        background: background || undefined,
        padding: padding || undefined,
      }}
    >
      {children}
    </body>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense>
        <RootLayoutChild>{children}</RootLayoutChild>
      </Suspense>
    </html>
  );
}
