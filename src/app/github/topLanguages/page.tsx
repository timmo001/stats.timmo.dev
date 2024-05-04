import { getTopLanguages } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import GitHubTopLanguages from "@/components/github/topLanguages";

export default async function TopLanguages() {
  const username = process.env.GITHUB_USERNAME || "timmo001";
  const { user } = await getUserData(username);
  const githubTopLanguages = getTopLanguages(user);

  return (
    <div className="grid grid-cols-6 gap-4">
      <GitHubTopLanguages data={githubTopLanguages} />
    </div>
  );
}
