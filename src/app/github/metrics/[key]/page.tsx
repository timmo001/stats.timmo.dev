import { notFound } from "next/navigation";

import { Metric as MetricItem } from "@/types/github/metric";
import { USERNAME, getMetrics } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubMetrics from "@/components/github/metrics";

export default async function Metric({ params }: { params: { key: string } }) {
  const { key } = params;

  const { user } = await getUserData(USERNAME);
  const githubMetrics = getMetrics(user);

  // Find the metric with the key that matches the URL parameter
  const metric = githubMetrics.find((metric: MetricItem) => metric.key === key);
  console.log({ metric });
  if (!metric) notFound();

  return (
    <div className="grid grid-cols-1 gap-12">
      <GitHubMetrics data={[metric]} />
    </div>
  );
}
