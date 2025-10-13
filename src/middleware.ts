import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is an admin route (excluding login page)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    // Check for authentication token
    const token = request.cookies.get('admin-token')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '')

    // Also check localStorage equivalent via a custom header
    const clientToken = request.headers.get('x-admin-token')

    const hasValidToken = token || clientToken

    if (!hasValidToken) {
      // Redirect to login page
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}