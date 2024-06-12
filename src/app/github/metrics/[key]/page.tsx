import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Stat as StatItem } from "@/types/github/stat";
import { USERNAME, getStats } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubStats from "@/components/github/stats";

export const metadata: Metadata = {
  title: "Stat | Timmo Stats",
};

// Revalidate every 5 minutes
export const revalidate = 300;

export default async function Stat({ params }: { params: { key: string } }) {
  const { key } = params;

  const { user } = await getUserData(USERNAME);
  const githubStats = getStats(user);

  // Find the stat with the key that matches the URL parameter
  const stat = githubStats.find((stat: StatItem) => stat.key === key);
  console.log({ stat });
  if (!stat) notFound();

  return (
    <div className="grid grid-cols-1 gap-12">
      <GitHubStats data={[stat]} />
    </div>
  );
}
