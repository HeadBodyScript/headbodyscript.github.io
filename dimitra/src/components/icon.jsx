"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const Icon = () => {
    const { data: session } = useSession();
    console.log(session);

  return (
    <img className="size-10 object-cover" src={session?.user?.image} alt="" />
  );
}

export default Icon;