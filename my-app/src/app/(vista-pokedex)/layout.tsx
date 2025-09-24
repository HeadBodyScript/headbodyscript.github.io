import Navbar from '@/components/import/navbar'
import Footer from '@/components/import/footer'

// check cookies and fill [data] into children and navbar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  );
}
