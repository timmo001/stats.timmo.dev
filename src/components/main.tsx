import Image from "next/image";
import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";

import { getUserData } from "@/serverActions/github";
import Header from "@/components/header";
import Metric from "@/components/metric";

export default async function Main({ username }: { username: string }) {
  const { user } = await getUserData(username);

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
      <Image
        className="absolute top-0 object-top object-contain -z-10"
        alt="Profile Picture"
        src="/logo.png"
        priority
        width={854}
        height={480}
        style={{
          marginTop: "-100px",
        }}
      />
      <Header user={user} />
      <main className="grid grid-cols-1 gap-12 mt-16 text-center">
        <div className="flex justify-center">
          <Icon title="GitHub" path={mdiGithub} size={2} color="white" />
          <h2 className="ml-2 text-5xl font-extralight">GitHub Metrics</h2>
        </div>
        <section className="grid grid-cols-4 gap-12">
          {githubMetrics.map((metric) => (
            <Metric key={metric.key} data={metric} />
          ))}
        </section>
      </main>
    </>
  );
}
