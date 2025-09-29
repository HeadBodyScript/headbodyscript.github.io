import { createClient } from '@/config/supabase';

import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "@/lib/session";
import { time, timeEnd } from 'console';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // session
  const session = await getSession();
  console.log(session)

const anykeyword = "hellothere"
// const meow = await fetch("http://localhost:3000/api/hello/", {
// const meow = await fetch(`http://localhost:3000/api/auth/new-user?keyword=${anykeyword}`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ dataObj: { hey: "ho" } }),
//   });
  




      const user = { uid: "testing123" }
      fetch(`http://localhost:3000/api/auth/new-user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dataObj: { uid: user.uid } }),
        });




        // 
            const supabase = await createClient();
            


          try {

            // const { data: response } = await supabase.from("user").select(session.user.uid);
            const { data: response } = await supabase.from("user").select().eq('uid', session.user.uid);
            // select().eq('id', slug);
            var newResponse = response || [];
            console.log(newResponse)
            console.log("session "+session.user.uid)
            if (newResponse.length === 0) {
              console.log("New user detected, creating entry...")
              // supabase.from('user').insert({ uid: session.user.uid, created_at: null, currency: 1000 });
              // .insert({ uid: 1 })
              const { error } = await supabase
              .from('user')
              .insert({ uid: session.user.uid, created_at: timeEnd, currency: 1000 });
                if (error) {
                  console.error('Error inserting user:', error);
                }
            }

            return;
          } catch (err) {
            console.error(err);
            return ;
          }


// test
    // const supabase = await createClient();
    // const { data: response } = await supabase.from("user").select();
    // var characters = response || [];
    // console.log(characters)



  // For the first example (sending plain text):
  // const data = await res.text();
  // For the second one (sending a JSON):
  // URLSearchParams.get("anykeyword")
  // const data = await meow.json();

  // console.log(meow)
return (

  <div className='grow'>

  </div>
)

}