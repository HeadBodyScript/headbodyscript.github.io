"use client"
import { SessionProviderProps} from "next-auth/react";

const Auth = ({children}: SessionProviderProps) => {
  // console.log(children[0].props.value)
  
  async function replacemeow(){
  console.log("replacing display section");
}

  return (
    <button className="bg-white flex row rounded-lg shadow w-full items-start" onClick={() =>  replacemeow()}>
      {children}
    </button>
  )
}
export default Auth;