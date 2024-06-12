import Image from "next/image";

import { getStats, getTopLanguages } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import Header from "@/components/header";
import GitHubStats from "@/components/github/stats";
import GitHubTopLanguages from "@/components/github/topLanguages";

export default async function Main({ username }: { username: string }) {
  const { user } = await getUserData(username);
  const [githubStats, githubTopLanguages] = await Promise.all([
    getStats(user),
    getTopLanguages(user),
  ]);

  return (
    <>
      {process.env.LOGO_URL ? (
        <img
          className="absolute top-0 object-top object-contain -z-10"
          alt="Logo"
          src={process.env.LOGO_URL}
          style={{
            height: 480,
            width: "100%",
          }}
        />
      ) : (
        <Image
          className="absolute top-0 object-top object-contain -z-10"
          alt="Logo"
          src={process.env.LOGO_URL || "/logo.png"}
          priority
          width={854}
          height={480}
          quality={100}
          style={{
            marginTop: "-100px",
          }}
        />
      )}
      <Header user={user} />
      <main className="grid grid-cols-1 gap-12 mt-8 text-center">
        <section>
          <div className="mt-4 grid grid-cols-6 gap-4">
            <GitHubTopLanguages data={githubTopLanguages} />
          </div>
          <div className="mt-12 grid grid-cols-4 gap-12">
            <GitHubStats data={githubStats} />
          </div>
        </section>
      </main>
    </>
  );
}
