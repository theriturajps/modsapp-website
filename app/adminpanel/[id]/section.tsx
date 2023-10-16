"use client";
import React, { use } from "react";
import NewPost from "./new-post";
import { usePathname } from "next/navigation";
import AllPosts from "./all-posts";

const Section = () => {
  const path = usePathname();
  return path === "/adminpanel/newpost" ? <NewPost /> : <AllPosts />;
};

export default Section;
