import Main from "@/components/main";

export default async function Home() {
  return <Main username={process.env.USERNAME || "timmo001"} />;
}
