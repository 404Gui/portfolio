import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  console.log('[middleware] interceptando:', request.nextUrl.pathname);
  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
