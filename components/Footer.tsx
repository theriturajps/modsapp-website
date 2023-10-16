import { InstagramIcon, MessageCircle, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 w-full items-center">
      <div className="container mx-auto flex justify-between items-center h-full">
        <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        <div className="flex space-x-4">
          {/* <Link
            href="#"
            className="flex flex-col  justify-enter items-center bg-transparent hover:text-rose-500 transition "
          >
            <InstagramIcon className=" text-rose-500 p-2 h-10 w-16 rounded-full   focus:outline-none focus:ring-2 hover:ring-2 hover:ring-gray-500 bg-transparent hover:text-rose-500 transition " />
            <span className="text-xs pt-1">Instagram</span>
          </Link> */}
          <Link
            href="#"
            className="flex justify-center items-center bg-transparent hover:text-blue-500 transition "
          >
            <SendIcon className="p-2 h-10 w-16 text-blue-500 rounded-full  focus:outline-none focus:ring-2 hover:ring-2 hover:ring-gray-500" />
            <span className="text-xs pt-1">Telegram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
