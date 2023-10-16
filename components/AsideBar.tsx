"use client";
import React, { useState } from "react";
import Link from "next/link";
import TelegramIcon from "./send-icon";
import NavItems from "./navitems";
import { MailIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-full">
      <div className="absolute md:hidden py-5 transition-all duration-300">
        <Button
          onClick={handleMobileMenuToggle}
          className="flex flex-col justify-center items-center text-white text-lg font-bold bg-transparent
          hover:bg-transparent hover:text-blue-500"
        >
          <Menu className="  text-2xl cursor-pointer" />
        </Button>
      </div>
      <div className="hidden md:flex">
        <aside className="w-56 bg-slate-600 rounded-md rounded-r-none h-screen">
          <div className="flex flex-col justify-between items-center h-screen">
            <div className="flex flex-col justify-around items-center h-1/2 w-full">
              <h1 className="text-xl font-sans font-bold py-5">Admin Page</h1>
              <NavItems />
            </div>
            <div className="flex flex-col justify-end pb-8 items-center text-center h-1/2 ">
              <Link
                href="https://t.me/r0ld3x"
                className="flex text-center gap-2 justify-center items-center bg-transparent hover:text-blue-500 transition px-5"
              >
                <TelegramIcon />
                <span className="text-lg font-bold text-center">Telegram</span>
              </Link>
              <Link
                href="mailto:roldexstark@gmail.com"
                className="flex text-center  gap-2 justify-center items-center bg-transparent hover:text-rose-500 transition px-5"
              >
                <MailIcon />
                <span className="text-lg font-bold text-center">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
      {isOpen && (
        <div
          className={`md:hidden fixed w-fit h-fit top-2 rounded-lg inset-0 z-50 bg-gray-900 flex justify-center p-4 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div>
            <div className="w-full flex justify-end p-px">
              <button
                className="border rounded-full text-white text-lg cursor-pointer flex justify-center items-center"
                onClick={handleMobileMenuToggle}
              >
                <X className="h-6 w-6 " />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div
                className={cn(
                  "w-full rounded-md bg-slate-600 flex justify-center items-center "
                  // path === "/adminpanel/newpost" ? "pl-2" : "px-2"
                )}
              ></div>
              <Link
                href="/adminpanel/newpost"
                className="font-bold text-emerald-400 bg-slate-800 w-full hover:bg-slate-900 rounded-md flex items-center justify-center disabled:opacity-50 px-4 py-2"
              >
                New Post
              </Link>
              <div
                className={cn(
                  "w-full rounded-md bg-slate-600 flex justify-center items-center "
                  // path === "/adminpanel/newpost" ? "pl-2" : "px-2"
                )}
              ></div>
              <Link
                href="/adminpanel/allposts"
                className="font-bold text-emerald-400 bg-slate-800 w-full hover:bg-slate-900 rounded-md flex items-center justify-center disabled:opacity-50 px-4 py-2"
              >
                All Posts
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsideBar;
