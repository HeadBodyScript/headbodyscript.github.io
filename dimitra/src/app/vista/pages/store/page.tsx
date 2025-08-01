import Navbar from 'dimi/app/include/navbar-vista'
import Footer from 'dimi/app/include/footer'
import "dimi/app/assets/css/app.css";
import "dimi/app/assets/css/pokedex.css";

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
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/1.jpg?raw=true" alt="" />
                <div className="column">
                <p>???</p>
                <p>Attack: 20</p>
                <p>Health: 2</p>
                <p>ID: 001</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/2.jpg?raw=true" alt="" />
                <div className="column">
                <p>Sky</p>
                <p>Attack: 18</p>
                <p>Health: 3</p>
                <p>ID: 002</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/3.jpg?raw=true" alt="" />
                <div className="column">
                <p>Withered Rose</p>
                <p>Attack: 16</p>
                <p>Health: 7</p>
                <p>ID: 003</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/4.jpg?raw=true" alt="" />
                <div className="column">
                <p>Ellie</p>
                <p>Attack: 12</p>
                <p>Health: 4</p>
                <p>ID: 004</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/5.jpg?raw=true" alt="" />
                <div className="column">
                <p>Techy</p>
                <p>Attack: 30</p>
                <p>Health: 2</p>
                <p>ID: 005</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/6.jpg?raw=true" alt="" />
                <div className="column">
                <p>Violet</p>
                <p>Attack: 22</p>
                <p>Health: 2</p>
                <p>ID: 006</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/7.jpg?raw=true" alt="" />
                <div className="column">
                <p>DIMI</p>
                <p>Attack: 11</p>
                <p>Health: 9</p>
                <p>ID: 007</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/item-health.jpg?raw=true" alt="" />
                <div className="column">
                <p>Crystal Heart</p>
                <p>+Health</p>
                <p>Common</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/item-strength.jpg?raw=true" alt="" />
                <div className="column">
                <p>Shard Of Strength</p>
                <p>+Strength</p>
                <p>Common</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/item-evade.jpg?raw=true" alt="" />
                <div className="column">
                <p>Ring of evading</p>
                <p>+Evade</p>
                <p>Common</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/lootbox-basic.png?raw=true" alt="" />
                <div className="column">
                <p>LOOTBOX</p>
                <p>COMMON</p>
                </div>
                <button className="buy">BUY</button>
              </div>
              <div className="card info center row justify-content-between">
                <img className="img" src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/lootbox-epic.png?raw=true" alt="" />
                <div className="column">
                <p>LOOTBOX</p>
                <p>EPIC</p>
                </div>
                <button className="buy">BUY</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      </div>
  );
}
