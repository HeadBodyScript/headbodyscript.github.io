import { createClient } from '@/config/supabase';
export default async function Instruments() {
  const supabase = await createClient();
  const { data: characters } = await supabase.from("characters").select();
  return <pre>{JSON.stringify(characters, null, 2)}</pre>
}