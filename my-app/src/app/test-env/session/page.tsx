import { getSession } from "@/lib/session";
export default async function Home() {
  const session = await getSession();
  // const session = null;
  // console.log('SESSION:', session)
  return (
    <>
      <div>session</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
