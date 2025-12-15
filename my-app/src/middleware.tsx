// import { NextResponse, NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {

//   return NextResponse.redirect(new URL('/', request.url))
// // 
// }

// export const config = {
//   matcher: '/about',
// }

import { NextRequest, NextResponse } from 'next/server'
// import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'
import { updateSession, decrypt } from "@/lib/session";

 
// 1. Specify protected and public routes
const protectedRoutes = ['/dimi', '/admin', '/user']
const publicRoutes = ['/auth', '/public', '/test-env']
 
export default async function middleware(request: NextRequest) {
  await updateSession(request);
  // 2. Check if the current route is protected or public
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value
  // console.log('MIDDLEWARE COOKIE:', cookie) // show jwt
  const session = await decrypt(cookie || '').catch(() => null)
  // console.log('MIDDLEWARE SESSION:', session) // show json
  // req.globalSession = session;
  


  // response.headers.set('X-HEADER', 'some-value-to-pass');
  const response = NextResponse.next();
  response.headers.set('X-HEADER', 'some-value-to-pass');
  // return response;

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.user.uid) {
    return NextResponse.redirect(new URL('/auth', request.nextUrl))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session
    
    // &&
    // !request.nextUrl.pathname.startsWith('/dashboard')
  ) {
    // console.log('MIDDLEWARE IF')
    return 
    // NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
//  console.log('MIDDLEWARE return')
  return NextResponse.next(), response;
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}