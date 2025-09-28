"use client"
import { SessionProviderProps} from "next-auth/react";

const ButtonPostAPI = ({children}: SessionProviderProps) => {

  function fetchAPIFromId() {
    console.log("say click")

    // call aip
    const responseApi = fetch("http://localhost:3000/api/hello/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dataObj: { hey: "ho" } }),
    });
    // For the first example (sending plain text):
    // const data = await res.text();
    // For the second one (sending a JSON):
    // const data = await responseApi.json();

  console.log(responseApi)
  }
    return (
      <button type="button" onClick={() => { fetchAPIFromId(); console.log("click") }} className="bg-white flex row rounded-lg shadow w-full items-start h-full">
        {children}
      </button>

  )
}

export default ButtonPostAPI;

// change this whole component to a link
// use the slug thing to fetch the correct ID to display