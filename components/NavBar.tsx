"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Blocks,
  Component,
  ContactIcon,
  HomeIcon,
  Menu,
  MonitorPlay,
  Wand2,
  X,
} from "lucide-react";

import Categories from "@/components/category";
import ChangeThemeButton from "@/components/change-theme";
import { Button } from "./ui/button";

const sans = Open_Sans({
  weight: "500",
  subsets: ["latin"],
});

const Items = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Contact",
    icon: <ContactIcon />,
    href: "contact",
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed w-full bg-slate-600 top-0 left-0 h-16 items-center">
        <div className="container h-full mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-lg font-bold">
            ModsWorld.xyz
          </a>
          <Button
            onClick={handleMobileMenuToggle}
            className="md:hidden flex flex-col justify-center items-center"
          >
            <Menu className="bg-transparent text-2xl cursor-pointer" />
          </Button>
          <div className="md:flex hidden space-x-4">
            {" "}
            {Items.map((item) => (
              <Link
                href={item.href}
                className={cn(
                  "flex gap-2 justify-center items-center self-center text-white hover:text-gray-300",
                  sans.className
                )}
                key={item.name}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Categories
              className={cn(sans.className, "text-white hover:text-gray-300")}
            />
            <div>
              <ChangeThemeButton className="" />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed w-full inset-0 z-50 bg-slate-300 dark:bg-gray-900 bg-opacity-90 flex justify-center">
          <div className="absolute top-5 right-[75px] border bg-slate-600 h-10 w-10 text-center rounded-full text-white text-lg cursor-pointer flex justify-center items-center">
            <ChangeThemeButton className="" />
          </div>
          <button
            className="absolute top-5 right-8 border bg-slate-600 h-10 w-10 text-center rounded-full text-white text-lg cursor-pointer flex justify-center items-center"
            onClick={handleMobileMenuToggle}
          >
            <X className="h-8 w-8 " />
          </button>
          <div className="flex flex-col gap-4 justify-center items-center">
            {Items.map((item) => (
              <Link
                href={item.href}
                className={cn(
                  "flex gap-2 justify-center items-center self-center text-white hover:text-gray-300",
                  sans.className
                )}
                key={item.name}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 items-center justify-center">
              <Link
                className="flex gap-2 justify-center items-center self-center text-white hover:text-gray-300 "
                href={""}
              >
                <Wand2 />
                Latest Release
              </Link>
              <Link
                className="flex gap-2 justify-center items-center self-center text-white hover:text-gray-300"
                href={""}
              >
                <MonitorPlay />
                OTT Mods
              </Link>
              <Link
                className="flex gap-2 justify-center items-center self-center text-white hover:text-gray-300"
                href={""}
              >
                <Component />
                Featured Mods
              </Link>
              <Link
                className="flex gap-2 justify-center items-center self-center text-white hover:text-gray-300"
                href={""}
              >
                <Blocks />
                Other Mods
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
