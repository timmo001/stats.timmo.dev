export interface Metric {
  key: string;
  url: string;
  title: string;
  value: string | number;
  secondaryValue?: string | number;
}
