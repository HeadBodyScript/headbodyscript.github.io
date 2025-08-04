import Navbar from 'dimi/components/include/navbar-vista'
import Footer from 'dimi/components/include/footer'
import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/pokedex.css";

export default function index() {
  return (
    <div id="container">
      <Navbar user={""}/>
      <main className="center row-reverse">
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
