import Image from "next/image";
import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";

import { getUserData } from "@/serverActions/github";
import Header from "@/components/header";
import Metric from "@/components/metric";

function getContrastColor(hex: string): string {
  // If a leading # is provided, remove it
  if (hex.slice(0, 1) === "#") {
    hex = hex.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  // Convert to RGB value
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? "black" : "white";
}

export default async function Main({ username }: { username: string }) {
  const { user } = await getUserData(username);

  let topLanguages: Array<{
    name: string;
    size: number;
    color: string;
    contrastColor: string;
  }> = [];

  if (user.repositories.nodes.length > 0) {
    // Loop through the top repositories
    for (const repo of user.repositories.nodes) {
      // Loop through the languages of the repository
      for (const language of repo.languages.edges) {
        // Find the language in the topLanguages array
        const index = topLanguages.findIndex(
          (topLanguage) => topLanguage.name === language.node.name
        );

        // If the language is not in the topLanguages array, add it
        if (index === -1) {
          topLanguages.push({
            name: language.node.name,
            size: language.size,
            color: language.node.color,
            contrastColor: language.node.color
              ? getContrastColor(language.node.color)
              : "white",
          });
        } else {
          // If the language is in the topLanguages array, update the size
          topLanguages[index].size += language.size;
        }
      }
    }
  }

  topLanguages = topLanguages.sort((a, b) => b.size - a.size).slice(0, 12);

  const githubMetrics: Array<{
    key: string;
    title: string;
    value: string | number;
    secondaryValue?: string | number;
  }> = [
    {
      key: "repositories",
      title: "Repositories",
      value: user.repositories.totalCount,
      secondaryValue: `(${
        Math.round((user.repositories.totalDiskUsage / 1024 / 1024) * 100) / 100
      } GB)`,
    },
    {
      key: "followers",
      title: "Followers",
      value: user.followers.totalCount,
      secondaryValue: `(${user.following.totalCount} following)`,
    },
    {
      key: "watching",
      title: "Watching",
      value: user.watching.totalCount,
    },
    {
      key: "starredRepositories",
      title: "Stars",
      value: user.starredRepositories.totalCount,
    },
    {
      key: "contributions",
      title: "Contributions",
      value: user.contributionsCollection.totalCommitContributions,
    },
    {
      key: "issues",
      title: "Issues",
      value: user.contributionsCollection.totalIssueContributions,
    },
    {
      key: "pullRequests",
      title: "Pull Requests",
      value: user.contributionsCollection.totalPullRequestContributions,
    },
    {
      key: "reviews",
      title: "Reviews",
      value: user.contributionsCollection.totalPullRequestReviewContributions,
    },
  ];

  return (
    <>
      {process.env.LOGO_URL ? (
        <img
          className="absolute top-0 object-top object-contain -z-10"
          alt="Logo"
          src={process.env.LOGO_URL}
          style={{
            height: 480,
            width: "100%",
          }}
        />
      ) : (
        <Image
          className="absolute top-0 object-top object-contain -z-10"
          alt="Logo"
          src={process.env.LOGO_URL || "/logo.png"}
          priority
          width={854}
          height={480}
          quality={100}
          style={{
            marginTop: "-100px",
          }}
        />
      )}
      <Header user={user} />
      <main className="grid grid-cols-1 gap-12 mt-8 text-center">
        <section>
          {topLanguages.length > 0 && (
            <div className="mt-4 grid grid-cols-6 gap-4">
              {topLanguages.map((language) => (
                <span
                  className="inline-flex items-center px-3 py-1 text-sm font-medium leading-5 rounded-full"
                  style={{
                    color: language.contrastColor,
                    backgroundColor: language.color,
                  }}
                >
                  {language.name}
                </span>
              ))}
            </div>
          )}
          <div className="mt-12 grid grid-cols-4 gap-12">
            {githubMetrics.map((metric) => (
              <Metric key={metric.key} data={metric} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
