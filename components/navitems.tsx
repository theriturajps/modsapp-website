"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold items-center text-center justify-center w-full">
      <div
        className={cn(
          "w-full",
          path === "/adminpanel/newpost" ? "pl-2" : "px-2"
        )}
      >
        {/* <Button
          asChild
          disabled={path === "/adminpanel/newpost"}
          className={cn(
            "pointer-events-none opacity-50",
            path !== "/adminpanel/allposts" &&
              "disabled:pointer-events-auto disabled:opacity-100"
          )}
        > */}
        <Link
          href="/adminpanel/newpost"
          className="font-bold text-emerald-400 bg-slate-800 w-full hover:bg-slate-900 rounded-none rounded-l-md h-14 flex items-center justify-center disabled:opacity-50"
        >
          New Post
        </Link>
        {/* </Button> */}
      </div>
      <div
        className={cn(
          "w-full",
          path === "/adminpanel/allposts" ? "pl-2" : "px-2"
        )}
      >
        <Link
          href="/adminpanel/allposts"
          className={cn(
            "font-bold text-emerald-400 bg-slate-800 w-full rounded-none",
            "rounded-l-md h-14 flex items-center justify-center",
            path === "/adminpanel/allposts"
              ? ""
              : "hover:bg-slate-900 hover:opacity-100"
          )}
        >
          All Posts
        </Link>
        {/* </Button> */}
      </div>
    </div>
  );
};

export default NavItems;
