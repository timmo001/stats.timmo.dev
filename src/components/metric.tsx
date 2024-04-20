import Icon from "@mdi/react";
import { mdiEmail, mdiGithub, mdiMastodon, mdiTwitter } from "@mdi/js";

import { SocialAccountNode } from "@/types/user";

const iconMap: Record<string, string> = {};

export default function Metric({
  data,
}: {
  data: {
    title: string;
    value: string | number;
    secondaryValue?: string | number;
  };
}) {
  return (
    <div className="grid grid-cols-1 gap-2">
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
