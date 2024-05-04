import { USERNAME } from "@/lib/github";
import Main from "@/components/main";

export default async function Home() {
  return <Main username={USERNAME} />;
}
