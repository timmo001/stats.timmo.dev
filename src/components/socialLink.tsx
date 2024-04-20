import Icon from "@mdi/react";
import {
  mdiDevTo,
  mdiEmail,
  mdiGithub,
  mdiMastodon,
  mdiTwitter,
} from "@mdi/js";

import { SocialAccountNode } from "@/types/user";
import { useMemo } from "react";

const iconMap: Record<string, string> = {
  devto: mdiDevTo,
  email: mdiEmail,
  github: mdiGithub,
  mastodon: mdiMastodon,
  twitter: mdiTwitter,
};

export default function SocialLink({
  account,
}: {
  account: SocialAccountNode;
}) {
  const icon = useMemo<string>(() => {
    if (account.url.includes("dev.to")) return mdiDevTo;
    return iconMap[account.provider.toLowerCase()];
  }, []);
  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center"
    >
      <Icon title={account.displayName} path={icon} size={2} color="white" />
    </a>
  );
}
