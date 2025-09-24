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
 
// 1. Specify protected and public routes
const protectedRoutes = ['/dimi']
const publicRoutes = ['/auth', '/']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('user0')?.value
  // const session = await decrypt(cookie)
  console.log('MIDDLEWARE COOKIE:', cookie)
  const session = JSON.parse(cookie || '{}');
  // cookie = the thing I said it was
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.uid) {
    return NextResponse.redirect(new URL('/auth', req.nextUrl))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.uid 
    // &&
    // !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return 
    // NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}