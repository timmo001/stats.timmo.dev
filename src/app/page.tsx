import { Metadata } from "next";

import { USERNAME } from "@/lib/github";
import Main from "@/components/main";

export const metadata: Metadata = {
  title: "Timmo Metrics",
  description: "Aggregated metrics for Timmo",
};

export default async function Home() {
  return <Main username={USERNAME} />;
}
