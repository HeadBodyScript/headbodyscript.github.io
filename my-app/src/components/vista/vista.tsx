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
            <p class='text-left'>Name:</p>
            <p class='text-left'>${item.name}</p>
            <p class='text-left'>Attack:</p>
            <p class='text-left'>${item.attack}</p>
            <p class='text-left'>Health:</p>
            <p class='text-left'>${item.health}</p>
            <p class='text-left'>ID:</p>
            <p class='text-left'>${item.id}</p>
            <p class='text-left'>Description:</p>
            <p class='text-left'>${item.description}</p>
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
export default Vista;