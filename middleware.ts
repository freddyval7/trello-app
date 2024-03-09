import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/"],
  afterAuth(auth, request) {
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, request.url);
      return NextResponse.redirect(orgSelection.toString());
    }

    if (!auth.orgId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: request.url})
    }

    if (auth.userId && !auth.orgId && request.nextUrl.pathname !== "/select-org") {
      return NextResponse.redirect("/select-org");
    }
  },
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
