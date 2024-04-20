import Image from "next/image";

import { getUserData } from "@/serverActions/github";
import { SocialAccountNode } from "@/types/user";
import SocialLink from "@/components/socialLink";

export default async function Home() {
  const { user } = await getUserData();

  return (
    <>
      <Image
        className="absolute top-0 object-top object-contain -z-10"
        alt="Profile Picture"
        src="/logo-nobackground-4k.png"
        priority
        width={854}
        height={480}
        style={{
          marginTop: "-100px",
        }}
      />
      <header
        className="text-center text-white"
        style={{
          marginTop: "240px",
        }}
      >
        <div className="grid grid-cols-4 gap-12">
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
    </>
  );
}
