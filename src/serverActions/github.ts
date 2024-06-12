"use server";
import { promises as fs } from "fs";
import { Octokit } from "octokit";
import { parseISO, format } from "date-fns";

import { User } from "@/types/github/user";
import { UserID } from "@/types/github/userID";
import { CommitsPerMonth } from "@/types/github/commitsPerMonth";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getUserID(login: string): Promise<string> {
  const query = await fs.readFile(
    `${process.cwd()}/src/graphql/userID.graphql`,
    "utf-8"
  );
  try {
    const response = await octokit.graphql<UserID>(query, {
      login,
    });
    return response.user.id;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserData(login: string): Promise<User> {
  const query = await fs.readFile(
    `${process.cwd()}/src/graphql/user.graphql`,
    "utf-8"
  );
  try {
    return await octokit.graphql<User>(query, {
      login,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCommitsPerMonth(
  id: string,
  login: string,
  since: string
) {
  const query = await fs.readFile(
    `${process.cwd()}/src/graphql/commitsPerMonth.graphql`,
    "utf-8"
  );

  try {
    const response = await octokit.graphql<CommitsPerMonth>(query, {
      id,
      login,
      since,
    });
    const repositories = response.data.user.repositories.nodes;
    const commitsPerMonth: Record<string, number> = {};

    for (const repo of repositories) {
      if (!repo.defaultBranchRef) continue;

      const commits = repo.defaultBranchRef.target.history.nodes;

      for (const commit of commits) {
        const commitDate = parseISO(commit.committedDate);
        const month = format(commitDate, "yyyy-MM");
        if (!commitsPerMonth[month]) {
          commitsPerMonth[month] = 0;
        }
        commitsPerMonth[month]++;
      }
    }

    return commitsPerMonth;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
