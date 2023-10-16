import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

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

export async function POST(req: any) {
  const { title, content, downloadlink, playstorelink, modtype } =
    await req.json();
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
    const urlPathName = validatedData.title.toLowerCase().replace(/\s+/g, "-");
    const postExists = await prisma.post.findFirst({
      where: {
        OR: [
          { urlString: urlPathName },
          { playstorelink: validatedData.playstorelink },
          { downloadlink: validatedData.downloadlink },
        ],
      },
    });
    if (postExists) {
      return NextResponse.json(
        { error: true, errors: ["Already exists"] },
        { status: 200 }
      );
    }
    const newPost = await prisma.post.create({
      data: { published: true, urlString: urlPathName, ...validatedData },
    });
    if (newPost) {
      return NextResponse.json({ error: false, url: urlPathName });
    } else {
      return NextResponse.json(
        { error: true, errors: ["Server Error"] },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: string[] = [];
      error.errors.forEach((err) => {
        if (err.message) {
          fieldErrors.push(err.path + " " + err.message);
        }
      });
      return NextResponse.json(
        { error: true, errors: fieldErrors },
        { status: 200 }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        { error: true, errors: [error.message] },
        { status: 200 }
      );
    }
  }
}
