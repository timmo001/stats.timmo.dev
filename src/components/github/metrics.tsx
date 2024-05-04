import { Metric as MetricItem } from "@/types/github/metric";
import Metric from "@/components/metric";

export default function GitHubMetrics({
  data,
}: {
  data: Array<MetricItem>;
}): Array<JSX.Element> {
  return data.map((metric: MetricItem) => (
    <Metric key={metric.key} data={metric} />
  ));
}
