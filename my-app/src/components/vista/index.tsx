"use client"
import { SessionProviderProps} from "next-auth/react";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { app } from "@/config/firebase.config";
const Vista = ({children}: SessionProviderProps) => {

  
const fetcher = async () => {
    const dbRef = ref(getDatabase(app));
     const item = await get(child(dbRef, `characters/${children[0].props.value ?? 0}`)).then((snapshot) => {
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
        <div>
          <div class='w-[256px] h-auto md:h-auto aspect-square md:rounded-lg' style="background-image: ${item.url ?? "0"}; background-size: cover; background-position: center;"></div>
          <div class='p-4'>
          <h1>${item.name ?? "Name"} #${item.id ?? "000"}</h1>
          <h2 class='mb-4'>${item.description ?? "Description"}</h2>
            <table class='w-full'>
              <tr>
                <td class='text-left'>
                  <div class='row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                    </svg>
                    <span>Attack Damage</span>
                  </div>
                </td>
                <td class='text-right'>${item.attack ?? "0"}</td>
              </tr>
              <tr>
                <td class='text-left'>
                  <div class='row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                    </svg>
                    <span>Health</span>
                  </div>
                </td>
                <td class='text-right'>${item.health ?? "0"}</td>
              </tr>
              <tr>
                <td class='text-left'>
                  <div class='row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                    </svg>
                    <span>Physical Armor</span>
                  </div>
                </td>
                <td class='text-right'>${item.physical_armor ?? "0"}</td>
              </tr>
              <tr>
                <td class='text-left'>
                  <div class='row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-caret-right top-[1px] relative" viewBox="0 0 16 16">
                      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                    </svg>
                    <span>Magic Armor</span>
                  </div>
                </td>
                <td class='text-right'>${item.magic_armor ?? "0"}</td>
              </tr>
            </table>
          <h1 class='text-left mt-4'><strong>Abilities</strong></h1>
          </div>
        </div>
      `;
      item.ability.forEach((element : any) => 
      {
        display.innerHTML +=
          `
        <div class='px-4'>
          <h2 class='text-left pl-2'>${element.name ?? "0"}</h2>
            <div class='ml-4'>
              <table class='w-full mb-4 text-left pl-4'>
                <tbody>
                  <tr>
                    <td width=50px>${element.type ?? "0"}</td>
                    <td width=50px>${element.scaling_type ?? "Type"} ${element.scaling ?? "0"}%</td>
                    <td width=50px class='text-right'>${element.success ?? "0"}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
          `

      }
      );

      // item.ability.forEach() {
      //   console.log(item)
      // }
    }
  };
  fetcher()
  return (
      <button type="button" onClick={() => { fetcher(); console.log("click") }} className="bg-white flex row rounded-lg shadow w-full items-start h-full">
        {children}
      </button>
  )
}
export default Vista;