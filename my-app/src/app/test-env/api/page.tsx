import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

const meow = await fetch("http://localhost:3000/api/hello/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ dataObj: { hey: "ho" } }),
  });
  // For the first example (sending plain text):
  // const data = await res.text();
  // For the second one (sending a JSON):
  const data = await meow.json();

  console.log(data)
return (

  <div className='grow'>

  </div>
)

}