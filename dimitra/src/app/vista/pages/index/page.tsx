import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/vista/pokedex.css";

import Script from 'next/script'

import Navbar from 'dimi/app/include/navbar'
import Footer from 'dimi/app/include/footer'

export default function index() {
  return (
    <div id="container">
      <Navbar/>
      <main className="center row">
        <section className='array'>
          <div className="card">
            <form action="" className="row search">
              <input type="text" placeholder="Search your fighter!" />
              <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </label>
            </form>
          </div>
          <div>
            <div className="navbar column">
              <div className="row">
                <div></div>
              </div>
              <div className="row select">
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Type</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Weakness</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Ability</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Height</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Weight</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
              </div>
            </div>
            <div className="display-array">
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="column">
                <p>???</p>
                <p>Attack: 20</p>
                <p>Health: 2</p>
                <p>ID: 001</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/2.jpg?raw=true" alt="" />
                <div className="column">
                <p>Sky</p>
                <p>Attack: 18</p>
                <p>Health: 3</p>
                <p>ID: 002</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/3.jpg?raw=true" alt="" />
                <div className="column">
                <p>Withered Rose</p>
                <p>Attack: 16</p>
                <p>Health: 7</p>
                <p>ID: 003</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/4.jpg?raw=true" alt="" />
                <div className="column">
                <p>Ellie</p>
                <p>Attack: 12</p>
                <p>Health: 4</p>
                <p>ID: 004</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/5.jpg?raw=true" alt="" />
                <div className="column">
                <p>Techy</p>
                <p>Attack: 30</p>
                <p>Health: 2</p>
                <p>ID: 005</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/6.jpg?raw=true" alt="" />
                <div className="column">
                <p>Violet</p>
                <p>Attack: 22</p>
                <p>Health: 2</p>
                <p>ID: 006</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/7.jpg?raw=true" alt="" />
                <div className="column">
                <p>DIMI</p>
                <p>Attack: 11</p>
                <p>Health: 9</p>
                <p>ID: 007</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="display">
          <div className="card">
            <p>Displaye additional information about cards here</p>
          </div>
        </section>
      </main>
<Script>
  {`console.log("meow")`}
</Script>
      <Footer/>
      </div>
  );
}
