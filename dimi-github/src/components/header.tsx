import Link from 'next/link'
const ComponentHeader = () => {
  return (
    <>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-gray-500 text-sm" href="/projects"><span className="sr-only">Home</span></Link>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  {/* <Link className={`text-gray-500 text-[5px] ${headbodyscriptFont.className}`} href="/">headbodyscript</Link> */}
                  <Link className={`text-gray-500 text-[5px]}`} href="/">headbodyscript</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/">Home</Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/projects">Projects</Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" href="/auth">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
export default ComponentHeader;
