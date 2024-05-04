import { SocialAccountNode, UserNode } from "@/types/github/user";
import SocialLink from "@/components/socialLink";

export default function Header({ user }: { user: UserNode }) {
  return (
    <header
      className="text-center text-white"
      style={{
        marginTop: "240px",
      }}
    >
      <div
        className={`flex flex-row gap-20`}
      >
        <SocialLink
          account={{
            displayName: "GitHub",
            provider: "github",
            url: `https://github.com/${user.login}`,
          }}
        />

        {user.socialAccounts.nodes.map((account: SocialAccountNode) => (
          <SocialLink
            key={account.provider}
            account={{
              ...account,
              // Capitalize the first letter of the provider
              displayName:
                account.provider[0].toUpperCase() +
                account.provider.slice(1).toLowerCase(),
            }}
          />
        ))}

        <SocialLink
          account={{
            displayName: "Email",
            provider: "email",
            url: `mailto:${user.email}`,
          }}
        />
      </div>
    </header>
  );
}
