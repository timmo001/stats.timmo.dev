import { Metadata } from "next";

import { USERNAME, getMetrics } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubMetrics from "@/components/github/metrics";

export const metadata: Metadata = {
  title: "Metrics | Timmo Metrics",
};

export default async function Metrics() {
  const { user } = await getUserData(USERNAME);
  const githubMetrics = getMetrics(user);

  return (
    <div className="grid grid-cols-4 gap-12">
      <GitHubMetrics data={githubMetrics} />
    </div>
  );
}
