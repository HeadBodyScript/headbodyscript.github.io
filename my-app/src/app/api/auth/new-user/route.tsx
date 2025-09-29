// api/route.js
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// DB
import { createClient } from '@/config/supabase';

// export async function POST(req:NextRequest) {
// //  const data: Payload = req.body;
// //  const { value } = data;
// //  console.log(value)
//   // console.log(req.nextUrl.searchParams.get("keyword"))
//   // const supabase = await createClient();
//   // const { data: response } = await supabase.from("characters").select().eq('id', '2');
//   var characters = "testing"

//   return NextResponse.json({ message: characters });
// }



export async function POST(req: NextRequest, res: NextResponse) {
  const supabase = await createClient();
  supabase.from('user').insert({ uid: "123", created_at: null, currency: 1000 }).select().single;
  try {
    // const body = await req.json();



    // console.log("API Body " + body);  
    // const { data: response } = await supabase.from(body.dataObj.uid).select();
    // var newResponse = response || [];
      // if (newResponse.length === 0) {
      // }



    return NextResponse.json({ message: "body" });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}