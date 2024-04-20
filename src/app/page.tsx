import { getUserData } from "@/serverActions/github";

export default async function Home() {
  const userData = await getUserData();

  return (
    <>
      <h1 className="text-4xl font-bold">Hi there! 👋</h1>
      <div>{JSON.stringify(userData)}</div>
    </>
  );
}
