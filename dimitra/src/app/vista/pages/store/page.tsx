import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/vista/pokedex.css";

import Navbar from 'dimi/app/vista/navbar'
import Footer from 'dimi/app/vista/footer'

export default function store() {
  return (
    <div id="container">
      <Navbar/>
      <main className="center row">
        <section className='array'>
          
          <div>
            <div className="navbar column">
              <div className="row">
                <div></div>
              </div>
              <div className="row select">
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Cards</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Potions</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
                <div className="card row justify-content-between"><div><span><i className="bi bi-"></i></span>Loot Boxes</div><div><span><i className="bi bi-chevron-down"></i></span></div></div>
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
      </main>
      <Footer/>
      </div>
  );
}
