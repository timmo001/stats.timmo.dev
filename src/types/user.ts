export interface User {
  user: UserNode;
}
export interface UserNode {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: Count;
  following: Count;
  repositories: Repositories;
  socialAccounts: SocialAccounts;
  starredRepositories: Count;
  status: Status;
  watching: Count;
}

export interface Count {
  totalCount: number;
}

export interface Repositories extends Count {
  totalDiskUsage: number;
}

export interface SocialAccounts {
  nodes: Array<SocialAccountNode>;
}

export interface SocialAccountNode {
  displayName: string;
  provider: string;
  url: string;
}

export interface Status {
  message: string;
  emoji: string;
  emojiHTML: string;
}
