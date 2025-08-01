"use client"
import { SessionProviderProps} from "next-auth/react";

const Auth = ({children}: SessionProviderProps) => {
const fetcher = async () => {

    // function dothething(){
    //                             document.getElementById('display').classList.replace("right-0","right-1500")
    //                             }

  console.log("start function")
    const res = await fetch(
      'https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/dimitra/src/app/vista/pages/data.json'
    );
      // console.log("fetch")
      // console.log(res)

        function handleClick() {
    console.log('hello');
}
    const item = await res.json();
      // console.log("json")
      // console.log(item)
      // console.log("json + item")

      // console.log(item[children[0].props.value].url)

                          const display = document.getElementById('display');
                          display?.classList.replace("right-1500","right-0");


                          if (display) {
                            display.innerHTML = `
                              <div class="bg-white shadow min-h-full md:min-h-200 md:rounded-lg p-4 md:p-0">
                                <div class='w-4/4 h-auto md:w-full md:h-auto aspect-square md:rounded-lg' style="background-image: ${item[children[0].props.value].url}; background-size: cover; background-position: center;"></div>
                                <div class="md:w-full md:p-4 max-h-full md:max-h-auto max-w-dvw md:max-w-90 grid grid-cols-2">
                                  <p class='text-left'>Name:</p>
                                  <p class='text-left'>${item[children[0].props.value].name}</p>
                                  <p class='text-left'>Attack:</p>
                                  <p class='text-left'>${item[children[0].props.value].attack}</p>
                                  <p class='text-left'>Health:</p>
                                  <p class='text-left'>${item[children[0].props.value].health}</p>
                                  <p class='text-left'>ID:</p>
                                  <p class='text-left'>${item[children[0].props.value].id}</p>
                                  <p class='text-left'>Description:</p>
                                  <p class='text-left'>${item[children[0].props.value].description}</p>
                                  <p class='text-left'>Physical armor:</p>
                                  <p class='text-left'>7</p>
                                  <p class='text-left'>Magic armor:</p>
                                  <p class='text-left'>7</p>
                                  <p class='text-left'>Abilities:</p>
                                  <p class='text-left'></p>
                                  <p class='text-left'>Domination:</p>
                                  <p class='text-left'>Basic 50%</p>
                                  <p class='text-left'>Blade of Quartz:</p>
                                  <p class='text-left'>quick 25%</p>
                                  <p class='text-left'>Spectral Maw:</p>
                                  <p class='text-left'>Special: 100%</p>
                                  <p class='text-left'>Heartbreaker:</p>
                                  <p class='text-left'>passive</p>
                                </div>
                              </div>
                            `;
                          }
  };

  return (
      <button type="button" onClick={() => { fetcher(); console.log("click") }} className="bg-white flex row rounded-lg shadow w-full items-start h-full">
        {children}
      </button>
  )
}
export default Auth;