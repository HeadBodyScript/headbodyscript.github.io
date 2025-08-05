import Print from 'dimi/app/lib/print'
import { getUser } from 'dimi/app/lib/data'
// import { UserName } from 'dimi/app/ui/user-name'
 
export default async function Page() {
//   const user = await getUserData('characters')
  const db = await getUser('characters')

  console.log(db)
  return (
    <div>
        <Print></Print>
            {
              
              db.map((item: any) => (
                <div key={item.id} className='h-50 w-50'>
                    <div
                      className='w-full aspect-square rounded-lg'
                      style={{
                        backgroundImage: `${item.url}`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                    <div className="column p-4 w-full">
                      <p className='text-left'>Name: <span>{item.name}</span></p>
                      <p className='text-left'>Attack: <span>{item.attack}</span></p>
                      <p className='text-left'>Health: <span>{item.health}</span></p>
                      <p className='text-left'>ID: <span>{item.id}</span></p>
                    </div>
                </div>
              ))}
    </div>
  )
}