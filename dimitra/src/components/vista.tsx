"use client"
import { SessionProviderProps} from "next-auth/react";
import { promises as fs } from 'fs';


const Auth = ({children}: SessionProviderProps) => {
// console.log(children[0].props.value)


async function replacemeow(){

  const file = await fetch( 'data.json').then(res => res.json());
  // const data = JSON.parse(file);


  console.log("replacing display section");
    document.getElementById("display").innerHTML = 
  `
          <div class="bg-white shadow min-h-200 rounded-lg">
                <div className='w-full aspect-square rounded-lg' style={{ backgroundImage: "` + 'url(https://github.com/HeadBodyScript/headbodyscript.github.io/blob/main/static/vista/2.jpg?raw=true)' + `", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="column p-4">
                <p>Withered Rose</p>
                <p>Attack: 16</p>
                <p>Health: 7</p>
                <p>ID: ${file[children[0].props.value].id}</p>
                ${children[0].props.value}
              </div>
          </div>
  `
}


  return (
    <button className="bg-white flex row rounded-lg shadow w-full items-start" onClick={() =>  replacemeow()}>
      {children}
    </button>
  )
}
export default Auth;