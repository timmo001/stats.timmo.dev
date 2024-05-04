import { Metadata } from "next";

import { USERNAME, getTopLanguages } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubTopLanguages from "@/components/github/topLanguages";

export const metadata: Metadata = {
  title: "Top Languages | Timmo Metrics",
};

export default async function TopLanguages() {
  const { user } = await getUserData(USERNAME);
  const githubTopLanguages = getTopLanguages(user);

  return (
    <div className="grid grid-cols-6 gap-4">
      <GitHubTopLanguages data={githubTopLanguages} />
    </div>
  );
}
