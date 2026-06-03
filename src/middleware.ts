import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "../site.config";

export function middleware(request: NextRequest) {
  if (!siteConfig.maintenance.enabled) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname === "/maintenance" ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.svg" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
