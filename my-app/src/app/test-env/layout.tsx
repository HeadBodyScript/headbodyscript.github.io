import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'
import { getSession } from "@/lib/session";

// check cookies and fill [data] into children and navbar
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const session = await getSession();
  return (
    <>
        <Navbar session={session}/>
        {children}
        <Footer/>
    </>
  );
}
