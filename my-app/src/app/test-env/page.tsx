import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='bg-neutral-100 text-black'>
        <h1>auth</h1>
        <ul>
          <li><Link href={"/auth"}>Link: auth</Link></li>
        </ul>
        <br />
        <h1>Pokedex</h1>
        <ul>
          <li><Link href={"/dimi"}>Link: Dimi</Link></li>
          <li><Link href={"/dimi/game"}>Link: Dimi Game</Link></li>
          <li><Link href={"/dimi/store"}>Link: Dimi Store</Link></li>
        </ul>
        <br />
        <h1>Test</h1>
        <ul>
          <li><Link href={"/test-env/api"}>Link: API</Link></li>
          <li><Link href={"/test-env/cookies"}>Link: Cookies</Link></li>
          <li><Link href={"/test-env/db"}>Link: Firebase DB connection</Link></li>
          <li><Link href={"/test-env/port"}>Link: Port</Link></li>
          <li><Link href={"/test-env/session"}>Link: Check Session</Link></li>
          <li><Link href={"/test-env/supabase"}>Link: Supabase connection</Link></li>
          <li><Link href={"/test-env/user-client"}>Link: Userclient</Link></li>
        </ul>
      </main>
    </>
  );
}
