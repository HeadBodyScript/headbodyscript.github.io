"use client"
import { getUserData } from 'dimi/app/lib/user'
import Uiddb from 'dimi/app/lib/uiddb'

export default function Navbar() {
    const user = getUserData()
        console.log(user)

    const dbstuff = Uiddb(user) 
    console.log(dbstuff)
    return (
        <div>{dbstuff}</div>
    )
}