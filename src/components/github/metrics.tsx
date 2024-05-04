import { Metric as MetricItem } from "@/types/github/metric";
import Metric from "@/components/metric";

export default function GitHubMetrics({ data }: { data: Array<MetricItem> }) {
  return (
    <div className="mt-12 grid grid-cols-4 gap-12">
      {data.map((metric: MetricItem) => (
        <Metric key={metric.key} data={metric} />
      ))}
    </div>
  );
}
