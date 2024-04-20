import Icon from "@mdi/react";
import { mdiEmail, mdiGithub, mdiMastodon, mdiTwitter } from "@mdi/js";

import { SocialAccountNode } from "@/types/user";

const iconMap: Record<string, string> = {
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
  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center"
    >
      <Icon
        title={account.displayName}
        path={iconMap[account.provider.toLowerCase()]}
        size={2}
        color="white"
      />
    </a>
  );
}
