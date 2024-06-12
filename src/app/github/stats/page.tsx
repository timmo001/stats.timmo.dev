import { Metadata } from "next";

import { USERNAME, getStats } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubStats from "@/components/github/stats";

export const metadata: Metadata = {
  title: "Stats | Timmo Stats",
};

// Revalidate every 30 minutes
export const revalidate = 1800;

export default async function Stats() {
  const { user } = await getUserData(USERNAME);
  const githubStats = getStats(user);

  return (
    <div className="grid grid-cols-4 gap-12">
      <GitHubStats data={githubStats} />
    </div>
  );
}
