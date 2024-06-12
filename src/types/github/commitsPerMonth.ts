export interface CommitsPerMonth {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  repositories: Repositories;
}

export interface Repositories {
  nodes: RepositoriesNode[];
}

export interface RepositoriesNode {
  name: string;
  defaultBranchRef: DefaultBranchRef | null;
}

export interface DefaultBranchRef {
  target: Target;
}

export interface Target {
  history: History;
}

export interface History {
  totalCount: number;
  nodes: HistoryNode[];
}

export interface HistoryNode {
  author: Author;
  committedDate: string;
}

export interface Author {
  name: Name;
}

export enum Name {
  AidanTimson = "Aidan Timson",
  Timmo001 = "timmo001",
}
