import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'
import Link from 'next/link';

export default function Home() {
  // const data = ctx.res.getHeader('X-HEADER');
  // ctx.res.removeHeader('X-HEADER');
  // return { data };
    const response = NextResponse.next();
  const user = response.headers.get('X-HEADER')
  console.log('PAGE TSX USER:', user)
  // var user = {name: "Guest"};
  return (
    <>
      <Navbar session={user}/>
      <main>
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
      <Footer/>
    </>
  );
}
