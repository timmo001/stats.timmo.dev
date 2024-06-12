import { USERNAME } from "@/lib/github";
import Main from "@/components/main";

// Revalidate every 30 minutes
export const revalidate = 1800;

export default async function Home() {
  return <Main username={USERNAME} />;
}
