import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { DEFAULT_LOGIN_REDIRECT, apitAuthPrefix, authRoutes, publicRoutes } from "@/routes";

const {auth} = NextAuth(authConfig);

export default auth((req) => {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apitAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute) return;

  if(isAuthRoute) {
    if(isLoggedIn) return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    else return;
  }

  if(!isLoggedIn && !isPublicRoute) return Response.redirect(new URL("/auth/login", nextUrl));

  return;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}