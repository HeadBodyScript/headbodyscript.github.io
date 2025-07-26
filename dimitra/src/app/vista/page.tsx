import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/vista/pokedex.css";

import Navbar from 'dimi/app/vista/navbar'
import Footer from 'dimi/app/vista/footer'

export default function Home() {
  return (
    <div id="container">
      <Navbar/>
      <main className="center row">
        <section className='array'>
          <div className="card">
            <form action="" className="row search">
              <input type="text" placeholder="Search your Pokemon!" />
              <label htmlFor="">
                <img src="https://icon2.cleanpng.com/20180614/wbe/aa7snomck.webp" alt="" />
              </label>
            </form>
          </div>
          <div>
            <div className="navbar column">
              <div className="row">
                <div></div>
              </div>
              <div className="row">
                <div className="card">Type</div>
                <div className="card">Weakness</div>
                <div className="card">Ability</div>
                <div className="card">Height</div>
                <div className="card">Weight</div>
              </div>
            </div>
            <div className="display-array">
              <div className="card info">test</div>
              <div className="card info">test</div>
              <div className="card info">test</div>
              <div className="card info">test</div>
              <div className="card info">test</div>
              <div className="card info">test</div>
              <div className="card info">test</div>
              <div className="card info">test</div>
            </div>
          </div>
        </section>
        <section className="display">
          cantser cfaggt
        </section>
      </main>
      {/* <Footer/> */}
      </div>
  );
}
