import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/vista/pokedex.css";

import Navbar from 'dimi/app/vista/navbar'
import Footer from 'dimi/app/vista/footer'

export default function index() {
  return (
    <div id="container">
      <Navbar/>
      <main className="center row">
        <section className='array'>
          <div className="card">
            <div className="row search">
              <p>Select your loadout!</p>
            </div>
          </div>
          <div>
            <div className="navbar column">
              <div className="row">
                <div></div>
              </div>
              {/* <div className="row select">
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Type</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Weakness</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Ability</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Height</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Weight</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
              </div> */}
            </div>
            <div className="display-array">
              <div className="card info center row justify-content-between selected">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="column">
                <p>???</p>
                <p>Attack: 20</p>
                <p>Health: 2</p>
                <p>ID: 001</p>
                </div>
                <button>Select</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/2.jpg?raw=true" alt="" />
                <div className="column">
                <p>Sky</p>
                <p>Attack: 18</p>
                <p>Health: 3</p>
                <p>ID: 002</p>
                </div>
                <button>Select</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/3.jpg?raw=true" alt="" />
                <div className="column">
                <p>Withered Rose</p>
                <p>Attack: 16</p>
                <p>Health: 7</p>
                <p>ID: 003</p>
                </div>
                <button>Select</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/4.jpg?raw=true" alt="" />
                <div className="column">
                <p>Ellie</p>
                <p>Attack: 12</p>
                <p>Health: 4</p>
                <p>ID: 004</p>
                </div>
                <button>Select</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/5.jpg?raw=true" alt="" />
                <div className="column">
                <p>Techy</p>
                <p>Attack: 30</p>
                <p>Health: 2</p>
                <p>ID: 005</p>
                </div>
                <button>Select</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/6.jpg?raw=true" alt="" />
                <div className="column">
                <p>Violet</p>
                <p>Attack: 22</p>
                <p>Health: 2</p>
                <p>ID: 006</p>
                </div>
                <button>Select</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/7.jpg?raw=true" alt="" />
                <div className="column">
                <p>DIMI</p>
                <p>Attack: 11</p>
                <p>Health: 9</p>
                <p>ID: 007</p>
                </div>
                <button>Select</button>
              </div>
            </div>
          </div>
        </section>
        <section className="display">
          <div className="card">
            <h1>Available Players:</h1>
            <div className="player-list">
                <div className="row">
                  <button>JOIN</button>
                  <p>Dimitra</p>
                </div>
                <div className="row">
                  <button>JOIN</button>
                  <p>Dimitra</p>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      </div>
  );
}
