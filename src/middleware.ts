import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuth = !!token;
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");

  if (isAuthPage && isAuth) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (isAdminPage && !isAuth) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (isAdminPage && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
