import { Metadata } from "next";

import { USERNAME, getStats } from "@/lib/github";
import { getCommitsPerMonth, getUserID } from "@/serverActions/github";

export const metadata: Metadata = {
  title: "Charts | Timmo Stats",
};

// Revalidate every hour
export const revalidate = 3600;

export default async function Charts() {
  const id = await getUserID(USERNAME);
  const commitsPerMonth = await getCommitsPerMonth(
    id,
    USERNAME,
    // 12 months ago
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 365).toISOString()
  );
  console.log({ commitsPerMonth });

  return <div className="grid grid-cols-4 gap-12"></div>;
}
