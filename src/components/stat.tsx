import { useMemo } from "react";
import Icon from "@mdi/react";
import {
  mdiAccountMultipleOutline,
  mdiBullseye,
  mdiHandshake,
  mdiSourceBranchRefresh,
  mdiSourceCommit,
  mdiSourcePull,
  mdiSourceRepositoryMultiple,
  mdiStarOutline,
} from "@mdi/js";

import { Stat as StatItem } from "@/types/github/stat";

const iconMap: Record<string, string> = {
  repositories: mdiSourceRepositoryMultiple,
  followers: mdiAccountMultipleOutline,
  starredRepositories: mdiStarOutline,
  watching: mdiSourceBranchRefresh,
  contributions: mdiSourceCommit,
  issues: mdiBullseye,
  pullRequests: mdiSourcePull,
  reviews: mdiHandshake,
};

export default function Stat({ data }: { data: StatItem }) {
  const icon = useMemo<string>(() => {
    return iconMap[data.key];
  }, [data.key]);

  return (
    <a
      className="grid grid-cols-1 justify-items-center"
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon title={data.title} path={icon} size={3} color="white" />
      <h3 className="mt-2 text-2xl font-light">{data.title}</h3>
      <span className="text-2xl font-medium">{data.value}</span>
      {data.secondaryValue ? (
        <span className="text-sm font-normal">{data.secondaryValue}</span>
      ) : (
        <div
          style={{
            height: "24px",
          }}
        />
      )}
    </a>
  );
}
