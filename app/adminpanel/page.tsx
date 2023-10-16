"use client";
import { notFound, useRouter } from "next/navigation";

export default function Profile() {
  const route = useRouter();
  route.push("/");
}
