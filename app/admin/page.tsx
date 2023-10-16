"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import React, { useState } from "react";
import { signIn, signOut } from "next-auth/react";

const roboto = Roboto({
  weight: "500",
  subsets: ["cyrillic"],
});

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInCredentials = async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/adminpanel/newpost",
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-screen w-1/2 flex flex-col justify-center flex-center bg-slate-800 p-5 rounded-lg">
        <h1 className={cn("text-2xl pb-3 text-center", roboto.className)}>
          Sign In
        </h1>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSignInCredentials}
            className="w-full text-xl uppercase font-bold font-sans"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
