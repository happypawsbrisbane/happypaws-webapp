import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const auth = req.headers.get('authorization')
    const user = process.env.ADMIN_USER || 'ash'
    const pass = process.env.ADMIN_PASS || 'happypaws'

    if (!auth || !auth.startsWith('Basic ')) {
      return new NextResponse('Auth required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
      })
    }
    const [u, p] = atob(auth.split(' ')[1]).split(':')
    if (u !== user || p !== pass) return new NextResponse('Forbidden', { status: 403 })
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
