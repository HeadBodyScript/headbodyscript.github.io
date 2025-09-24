"use client"
import { SessionProviderProps} from "next-auth/react";

const Display = ({children}: SessionProviderProps) => {
const closeDisplay = async () => {

  const display = document.getElementById('display');
  display?.classList.replace("right-0","right-1500");
  };

  return (
      <button type="button" onClick={() => { closeDisplay(); console.log("Close") }} className="flex row items-start w-[256px]">
        {children}
      </button>
  )
}
export default Display;