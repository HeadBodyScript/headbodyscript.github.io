"use server";
// import cookies from 'next/headers'
// import { db } from '@/app/lib/db'
// import { encrypt } from '@/app/lib/session'
 
// export async function createSession(id: number) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
 
//   // 1. Create a session in the database
//   const data = await db
//     .insert(sessions)
//     .values({
//       userId: id,
//       expiresAt,
//     })
//     // Return the session ID
//     .returning({ id: sessions.id })
 
//   const sessionId = data[0].id
 
//   // 2. Encrypt the session ID
//   const session = await encrypt({ sessionId, expiresAt })
 
//   // 3. Store the session in cookies for optimistic auth checks
//   const cookieStore = await cookies()
//   cookieStore.set('session', session, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: 'lax',
//     path: '/',
//   })
// }

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 days from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function createSession(uid: string, userName: string, photoURL: string) {
  console.log(uid, userName, photoURL)

    const user = { uid: uid, userName: userName, photoURL: photoURL };

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000 * 1000); // 10 days
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
    // cookies().set("session", session, { expires, httpOnly: true });
    // (await cookies()).set("user0", JSON.stringify(user), { expires, httpOnly: true });
    (await cookies()).set("session", session, { expires, httpOnly: true });
    // document.cookie = `user0=`+JSON.stringify(user.proactiveRefresh.user);
}

export async function getSession() {
//   const session = cookies().get("session")?.value;
    const session = (await cookies()).get('session')?.value
    // console.log('COOKIE session:', session)
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}