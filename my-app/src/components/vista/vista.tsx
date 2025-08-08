"use client"
import { SessionProviderProps} from "next-auth/react";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "@/config/firebase.config";
const Vista = ({children}: SessionProviderProps) => {
const fetcher = async () => {
    const dbRef = ref(getDatabase(app));
     const item = await get(child(dbRef, `characters/${children[0].props.value}`)).then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
        return snapshot.val()
      }
    )
    const display = document.getElementById('display');
    display?.classList.replace("right-1500","right-0");


    if (display) {
      display.innerHTML = `
        <div class="bg-white shadow min-h-full md:min-h-200 md:rounded-lg p-4 md:p-0 md:w-90">
          <div class='w-4/4 h-auto md:w-90 md:h-auto aspect-square md:rounded-lg' style="background-image: ${item.url}; background-size: cover; background-position: center;"></div>
          <div class="md:w-full md:p-4 max-h-full md:max-h-auto max-w-dvw md:max-w-90 grid grid-cols-2">
            <div><p class='text-left'>Name:</p></div>
            <div><p class='text-left'>${item.name}</p></div>
            <div class='row'><img src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/icon/attack_damage.webp?raw=true" alt="" /><p class='text-left'>Attack:</p></div>
            <div><p class='text-left w-fit'>${item.attack}</p></div>
            <div class='row'><img src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/icon/health.webp?raw=true" alt="" /></p><p class='text-left'>Health:</p></div>
            <div><p class='text-left'>${item.health}</div>
            <div class='row'><img class='text-purple-400' src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/icon/armor.webp?raw=true" alt="" /><p class='text-left'>Physical armor:</p></div>
            <div><p class='text-left'>7</p></div>
            <div class='row'><img src="https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/icon/magic_armor.webp?raw=true" alt="" /><p class='text-left'>Magic armor:</p></div>
            <div><p class='text-left'>7</p></div>
            <div><p class='text-left'>ID:</p></div>
            <div><p class='text-left'>${item.id}</p></div>
            <div><p class='text-left'>Description:</p></div>
            <div><p class='text-left'>${item.description}</p></div>
            <div><p class='text-left'>Abilities:</p></div>
            <div><p class='text-left'></p></div>
            <div><p class='text-left'>Domination:</p></div>
            <div><p class='text-left'>Basic 50%</p></div>
            <div><p class='text-left'>Blade of Quartz:</p></div>
            <div><p class='text-left'>quick 25%</p></div>
            <div><p class='text-left'>Spectral Maw:</p></div>
            <div><p class='text-left'>Special: 100%</p></div>
            <div><p class='text-left'>Heartbreaker:</p></div>
            <div><p class='text-left'>passive</p></div>
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
export default Vista;