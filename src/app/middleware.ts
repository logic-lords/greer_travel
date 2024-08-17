import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || localStorage.getItem('token');
  const url = req.nextUrl.clone();

  if (!token) {
    // Redirect to login if not authenticated
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
