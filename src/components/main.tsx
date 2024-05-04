import Image from "next/image";

import { getMetrics, getTopLanguages } from "@/lib/github";
import { getUserData } from "@/serverActions/github";
import Header from "@/components/header";
import Metric from "@/components/metric";

export default async function Main({ username }: { username: string }) {
  const { user } = await getUserData(username);
  const [githubMetrics, githubTopLanguages] = await Promise.all([
    getMetrics(user),
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
          {githubTopLanguages.length > 0 && (
            <div className="mt-4 grid grid-cols-6 gap-4">
              {githubTopLanguages.map((language) => (
                <span
                  className="inline-flex items-center px-3 py-1 text-sm font-medium leading-5 rounded-full"
                  style={{
                    color: language.contrastColor,
                    backgroundColor: language.color,
                  }}
                >
                  {language.name}
                </span>
              ))}
            </div>
          )}
          <div className="mt-12 grid grid-cols-4 gap-12">
            {githubMetrics.map((metric) => (
              <Metric key={metric.key} data={metric} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
