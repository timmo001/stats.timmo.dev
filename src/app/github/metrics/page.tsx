import { getMetrics } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubMetrics from "@/components/github/metrics";

export default async function Metrics() {
  const username = process.env.GITHUB_USERNAME || "timmo001";
  const { user } = await getUserData(username);
  const githubMetrics = getMetrics(user);

  return (
    <div className="grid grid-cols-4 gap-12">
      <GitHubMetrics data={githubMetrics} />
    </div>
  );
}
