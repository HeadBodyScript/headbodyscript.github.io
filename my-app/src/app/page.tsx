import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
import { getSession } from "@/lib/session";

export default async function defaultPage() {
  const session = await getSession();
  //   const response = NextResponse.next();
  // const user = response.headers.get('X-HEADER')
  // console.log('PAGE TSX USER:', user)

  return (
    <>
      <Navbar session={session}/>
      <main className='bg-neutral-100'>

      </main>
      <Footer/>
    </>
  );
}
