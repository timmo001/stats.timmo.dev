import { SocialAccountNode, UserNode } from "@/types/user";
import SocialLink from "@/components/socialLink";

export default function Header({ user }: { user: UserNode }) {
  return (
    <header
      className="text-center text-white"
      style={{
        marginTop: "240px",
      }}
    >
      <div className="grid grid-cols-5 gap-20">
        <SocialLink
          account={{
            displayName: "GitHub",
            provider: "github",
            url: "https://github.com/timmo001",
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
            url: "mailto:aidan@timmo.dev",
          }}
        />
      </div>
    </header>
  );
}
