import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment app
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Utask helps team move
        </h1>
        <div className="w-fit text-3xl md:text-6xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl mt-6 text-neutral-400 mx-auto text-center max-w-xs md:max-w-2xl",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Utask.
      </div>
      <Button className="mt-8" asChild size="lg">
        <Link href="/sign-up">Get Utask for free</Link>
      </Button>
    </div>
  );
}
