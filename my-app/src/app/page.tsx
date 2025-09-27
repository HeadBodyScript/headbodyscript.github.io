import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'

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
      <Footer/>
    </>
  );
}
