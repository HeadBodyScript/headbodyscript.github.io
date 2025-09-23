import { NextResponse, NextRequest } from 'next/server'
 import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = await (await cookies())
  console.log(cookieStore.get('test')?.value)
  // console.log(cookieStore)
  return NextResponse.redirect(new URL('/', request.url))
  // const token = parseAuthCookie(request.headers.get('cookie'));
// 
}

export const config = {
  matcher: '/about',
}