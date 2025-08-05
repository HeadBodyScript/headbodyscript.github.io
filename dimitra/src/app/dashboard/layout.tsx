import { getUser } from 'dimi/app/lib/data'
// import { UserName } from 'dimi/app/ui/user-name'
 
export default async function Layout({ children } : any) {
  // const mmeeeee = "characters"
  // const user = await getUser(mmeeeee)
  // console.log("mew"+user)
 
  return (
    <>
      <nav>
        {/* ... */}
        {/* <UserName user={user.name} /> */}
      </nav>
      {children}
    </>
  )
}