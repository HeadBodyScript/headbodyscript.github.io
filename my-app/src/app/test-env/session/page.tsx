import { getSession } from "next-auth/react";
export default async function Home() {
  const session = await getSession();
  // console.log('SESSION:', session)
  return (
    <>
      <div>session</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
