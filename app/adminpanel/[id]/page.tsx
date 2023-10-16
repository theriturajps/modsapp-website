import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Section from "./section";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/");
  return (
    <div className="bg-slate-800 w-full p-5 h-screen">
      <Section />
    </div>
  );
};

export default Page;
