import localFont from 'next/font/local'
 
const headbodyscriptFont = localFont({
  src: "assets/font/headbodyscript.woff2"
})
 
export default function Home() {
  return (
        <header>
        {/* <ul>
            <li>
                <a href="https://headbodyscript.nl">
                    <p className={`icon ${headbodyscriptFont.className}`}>headbodyscript</p>
                </a>
            </li>
        </ul> */}
        {/* <ul>
            <li><a href="https://headbodyscript.nl">HOME</a></li>
            <li><a href="https://headbodyscript.nl/projects">PROJECTS</a></li>
            <li><a href="https://headbodyscript.nl/donate">DONATE</a></li>
        </ul> */}
        <ul>
          <li>
            <a>LOGIN</a>
          </li>
          <li>
            <div>
              <p>00</p>
            </div>
          </li>
          <li>
            <div>
              <p>LEVEL 0</p>
            </div>
          </li>
        </ul>
    </header>
    // <div id="navigation">
    //     <ul>
    //         <li>
    //             <a href="https://headbodyscript.nl">
    //                 <p className={`icon ${headbodyscriptFont.className}`}>headbodyscript</p>
    //             </a>
    //         </li>
    //     </ul>
    //     <ul>
    //         <li><a href="https://headbodyscript.nl">HOME</a></li>
    //         <li><a href="https://headbodyscript.nl/projects">PROJECTS</a></li>
    //         <li><a href="https://headbodyscript.nl/donate">DONATE</a></li>
    //     </ul>
    //     <ul>
    //       <li>
    //         <a>LOGIN</a>
    //       </li>
    //       <li>
    //         <div>
    //           <p>00</p>
    //         </div>
    //       </li>
    //       <li>
    //         <div>
    //           <p>LEVEL 0</p>
    //         </div>
    //       </li>
    //     </ul>
    // </div>
  );
}
