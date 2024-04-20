export interface User {
  data: Data;
}

export interface Data {
  user: UserClass;
}

export interface UserClass {
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
  nodes: Node[];
}

export interface Node {
  displayName: string;
  provider: string;
  url: string;
}

export interface Status {
  message: string;
  emoji: string;
  emojiHTML: string;
}
