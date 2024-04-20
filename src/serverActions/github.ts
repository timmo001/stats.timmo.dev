"use server";
import { promises as fs } from "fs";
import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app";

import { User } from "@/types/user";

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GITHUB_APP_ID,
    privateKey: process.env.GITHUB_APP_PRIVATE_KEY,
    installationId: process.env.GITHUB_APP_INSTALLATION_ID,
  },
});

export async function getUserData(): Promise<User> {
  const query = await fs.readFile(
    `${process.cwd()}/src/graphql/user.graphql`,
    "utf-8"
  );
  return await octokit.graphql(query, {
    login: "timmo001",
  });
}
