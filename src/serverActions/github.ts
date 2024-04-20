"use server";
import { promises as fs } from "fs";
import { Octokit } from "octokit";

import { User } from "@/types/user";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getUserData(): Promise<User> {
  const query = await fs.readFile(
    `${process.cwd()}/src/graphql/user.graphql`,
    "utf-8"
  );
  try {
    return await octokit.graphql<User>(query, {
      login: "timmo001",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
