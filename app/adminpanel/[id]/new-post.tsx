"use client";
import { Input } from "@/components/ui/input";
import React, { use, useEffect, useState } from "react";
import TextEditor from "@/components/TextEditor";
import SelectType from "./select-types";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { set, z } from "zod";
import Link from "next/link";

enum ModType {
  OTT = "OTT",
  Featured = "Featured",
  Other = "Other",
}

const schema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  downloadlink: z.string().url("Invalid Download Link format"),
  playstorelink: z.string().url("Invalid Playstore Link format"),
  modtype: z.enum([ModType.OTT, ModType.Featured, ModType.Other]),
});

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [downloadlink, setDownloadLink] = useState("");
  const [playstorelink, setPlaystoreLink] = useState("");
  const [modtype, setModtype] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [pathUrl, setPathUrl] = useState("");
  const handleSelect = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const formData = {
        title,
        content,
        downloadlink,
        playstorelink,
        modtype,
      };
      const validatedData = schema.parse(formData);
      // console.log(JSON.stringify(validatedData));
      const response = await fetch("/api/newpost", {
        body: JSON.stringify(validatedData),
        method: "POST",
      });
      if (!response.ok) {
        setErrors(["Something went wrong"]);
      }
      const data = await response.json();
      if (!data.error) {
        setPathUrl(data.url);
      } else {
        setErrors(data.errors);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: string[] = [];
        error.errors.forEach((err) => {
          if (err.message) {
            fieldErrors.push(err.message);
          }
        });
        setErrors(fieldErrors);
      } else if (error instanceof Error) {
        setErrors([error.message]);
      }
    }
  };
  useEffect(() => {
    if (errors.length > 0) {
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
    if (pathUrl) {
      setTimeout(() => {
        setPathUrl("");
      }, 5000);
    }
  }, [errors, pathUrl]);
  return (
    <div className="">
      <div className=" flex items-center justify-between flex-col py-5 gap-3">
        <h1 className="text-3xl font-sans font-semibold">Make A New Post</h1>
        <p className="text-sm">Add a new mod </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <div className="">
            <Input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="placeholder:font-semibold text-xl border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            />
          </div>
          <div className="bg-white/80">
            <TextEditor callback={(e) => setContent(e)} />
          </div>
          <div className="flex gap-5">
            <Input
              onChange={(e) => setDownloadLink(e.target.value)}
              value={downloadlink}
              placeholder="Download Link"
              className="placeholder:font-semibold text-xl border rounded-lg py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            />
          </div>
          <div className="flex gap-5">
            <Input
              onChange={(e) => setPlaystoreLink(e.target.value)}
              value={playstorelink}
              placeholder="PlayStore Link"
              className="placeholder:font-semibold text-xl border rounded-lg py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            />
            <SelectType callback={(e) => setModtype(e)} />
          </div>
        </div>
        <div className="bg-rose-500 text-center font-semibold">
          {errors.length > 0 ? (
            <ul className="error">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="text-center font-semibold">
          {pathUrl && (
            <Link
              referrerPolicy="no-referrer"
              target="_blank"
              className="rounded bg-emerald-700 font-bold py-2 px-4 hover:animate-pulse"
              href={"/" + pathUrl}
            >
              CLICK TO VIEW
            </Link>
          )}
        </div>
        <div className="flex justify-center items-center">
          <Button
            onClick={(e) => handleSelect(e)}
            disabled={errors.length > 0}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:animate-pulse"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
