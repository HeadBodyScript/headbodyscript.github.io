"use client"
import Navbar from 'dimi/components/include/navbar'
import Footer from 'dimi/components/include/footer'

export default function Home() {  
  return (
    <div className="main bg-neutral-300">
      <Navbar/>
      <main>
        <div className='flex justify-center gap-8 flex-wrap'>
          <section className='w-220 my-4'>
            <div className='p-2 mb-8 bg-white shadow rounded-lg'>
              <img className='w-full h-140 rounded-lg' src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
              <div className="text-black text-3xl md:text-4xl whitespace-nowrap leading-tight"><b>Variations</b> <br/>on a theme by Mozart</div>
              <div className="text-black text-xl italic sm:text-2xl">Fernando Sor (1778-1839)</div>
            </div>
            <div className="mt-1 grid grid-cols-2 font-sm gap-[0.625rem]">
              <div className='p-2 bg-white shadow rounded-lg'>
                <img className='w-full h-100 rounded-lg' src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="text-black text-1xl md:text-4xl whitespace-nowrap leading-tight"><b>Variations</b> <br/>on a theme by Mozart</div>
                <div className="text-black text-xl italic sm:text-2xl">Fernando Sor (1778-1839)</div>
              </div>
              <div className='p-2 bg-white shadow rounded-lg'>
                <img className='w-full h-100 rounded-lg' src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="text-black text-1xl md:text-4xl whitespace-nowrap leading-tight"><b>Variations</b> <br/>on a theme by Mozart</div>
                <div className="text-black text-xl italic sm:text-2xl">Fernando Sor (1778-1839)</div>
              </div>
              <div className='p-2 bg-white shadow rounded-lg'>
                <img className='w-full h-100 rounded-lg' src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="text-black text-1xl md:text-4xl whitespace-nowrap leading-tight"><b>Variations</b> <br/>on a theme by Mozart</div>
                <div className="text-black text-xl italic sm:text-2xl">Fernando Sor (1778-1839)</div>
              </div>
            </div>
          </section>
          <section className='w-150 my-4 bg-white'>
            <div>
              <h1><strong>LATEST VIDEO</strong></h1>
              <iframe width="100%" height="auto" style={{aspectRatio: 2/1}} src="https://www.youtube.com/embed/3yWz2K2frcU?si=3gzQ5E36jve8-2r8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}>
              </iframe>
            </div>
            <div>
              <h1><strong>IMPORTANT NOTICE</strong></h1>
              <div className='p-2'>
                <div>REPORT BUGS</div>
                <p>If you find any issues while playing, contact the #ask-for-help or #report-a-bug in the official Discord </p>
              </div>
              <div className='p-2'>
                <h1>No Discrod?</h1>
                <p>Report bugs here on through Github</p>
              </div>
              <div className='p-2'>
                <h1>Additional information</h1>
                <p>Additional information can be found on the official Discord</p>
              </div>
            </div>
            <div>
              <h1><strong>LATEST UPDATE</strong></h1>
              <div className='p-2'>
                <p>update</p>
              </div>
            </div>
            <div>
              <h1><strong>POPULAR</strong></h1>
              <div className='p-2'>
              <div className='px-20 rounded-lg'>
                <img className='w-full h-100 rounded-lg' src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="text-black text-3xl md:text-4xl whitespace-nowrap leading-tight"><b>Variations</b> <br/>on a theme by Mozart</div>
                <div className="text-black text-xl italic sm:text-2xl">Fernando Sor (1778-1839)</div>
              </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
      </div>
  );
}
