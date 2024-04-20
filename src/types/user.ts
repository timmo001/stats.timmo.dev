export interface User {
  user: UserNode;
}
export interface UserNode {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: Followers;
  following: Followers;
  starredRepositories: Followers;
  socialAccounts: SocialAccounts;
  status: Status;
  watching: Followers;
}

export interface Followers {
  totalCount: number;
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
