// api/route.js

import { NextResponse } from "next/server";
// DB
import { createClient } from '@/config/supabase';

export async function POST() {

      const supabase = await createClient();
      const { data: response } = await supabase.from("characters").select().eq('id', '2');
      var characters = response || [];

  return NextResponse.json({ message: characters });
}