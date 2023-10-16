"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { use, useEffect, useState } from "react";

const ChangeThemeButton = (className: { className: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  async function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    mounted && (
      <button
        onClick={changeTheme}
        className={cn(
          "flex items-center justify-center text-gray-400 rounded-full dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none focus:ring-2 hover:ring-2 hover:ring-gray-500",
          className
        )}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    )
  );
};

export default ChangeThemeButton;
