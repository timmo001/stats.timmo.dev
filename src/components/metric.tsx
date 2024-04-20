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

export default function Metric({
  data,
}: {
  data: {
    key: keyof typeof iconMap;
    title: string;
    value: string | number;
    secondaryValue?: string | number;
  };
}) {
  const icon = useMemo<string>(() => {
    return iconMap[data.key];
  }, [data.key]);

  return (
    <div className="grid grid-cols-1 gap-2 justify-items-center">
      <Icon title={data.title} path={icon} size={3} color="white" />
      <span className="text-2xl font-light">{data.title}</span>
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
    </div>
  );
}
