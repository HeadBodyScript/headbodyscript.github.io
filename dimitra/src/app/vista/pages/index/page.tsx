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
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://i.pinimg.com/736x/1b/20/52/1b20528c0ca38e19bf6216646f61102c.jpg" alt="" />
                <div className="column">
                <p>NAME</p>
                <p>HEALTH</p>
                <p>ATTACK</p>
                <p>ID: 000</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="display">
          <div className="card"></div>
        </section>
      </main>
      <Footer/>
      </div>
  );
}
