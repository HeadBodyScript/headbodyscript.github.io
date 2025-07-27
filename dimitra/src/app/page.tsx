import Link from 'next/link';
import "dimi/app/assets/css/app.css";

import Navbar from 'dimi/app/navbar'
import Footer from 'dimi/app/footer'

export default function Home() {
  return (
    <div id="container">
      <Navbar/>
      <main>MAIN
        <a href="/">home</a>
        <Link href="/auth/">    AUTH</Link>
        <Link href="/vista/pages/index/">    league</Link>

      </main>
      <Footer/>
      </div>
  );
}
