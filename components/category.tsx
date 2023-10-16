"use client";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

function Categories({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center justify-center gap-2  outline-none",
          className
        )}
      >
        <FolderOpen /> Category
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose One Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Latest Release</DropdownMenuItem>
        <DropdownMenuItem>OTT Mods</DropdownMenuItem>
        <DropdownMenuItem>Featured Mods</DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("hi")}>
          Other Mods
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Categories;
