"use client"
import { SessionProviderProps} from "next-auth/react";

const Auth = ({children}: SessionProviderProps) => {
  // console.log(children[0].props.value)
  
//  const item = {"name" : "meow", "url": "na/a", "attack": 10, "health": 7, "id": "000"}

const fetcher = async () => {
  console.log("start function")
    const res = await fetch(
      'https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/dimitra/src/app/vista/pages/data.json'
    );
      console.log("fetch")
      console.log(res)

    const item = await res.json();
      console.log("json")
      console.log(item)
            console.log("json + item")

      console.log(item[children[0].props.value].url)

                          const display = document.getElementById('display');
                          if (display) {
                            display.innerHTML = `
                              <div class="bg-white shadow min-h-200 rounded-lg">
                                <div class='w-full aspect-square rounded-lg' style="background-image: ${item[children[0].props.value].url}; background-size: cover; background-position: center;"></div>
                                <div class="column p-4">
                                  <p>${item[children[0].props.value].name}</p>
                                  <p>Attack: ${item[children[0].props.value].attack}</p>
                                  <p>Health: ${item[children[0].props.value].health}</p>
                                  <p>ID: ${item[children[0].props.value].id}</p>
                                  <p>Description: ${item[children[0].props.value].description}</p>
                                </div>
                              </div>
                            `;
                          }
  };

  return (

                      <button
                        type="button"
                        onClick={() => {
                          fetcher();
                          console.log("click")
                        }}
                        className="bg-white flex row rounded-lg shadow w-full items-start"
                      >
                      {children}

                      </button>
    // <button className="bg-white flex row rounded-lg shadow w-full items-start" onClick={() =>  replacemeow()}>
    //   {children}
    // </button>
  )
}
export default Auth;