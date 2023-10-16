import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: "500",
  subsets: ["cyrillic"],
});

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti blanditiis corporis. Nobis, adipisci quibusdam eos placeat corrupti non recusandae delectus laboriosam voluptates ex temporibus odit necessitatibus architecto voluptas cupiditate?",
    image: "/test.png",
  },
];

export default function Home() {
  return (
    <main className="pt-20 bg-white dark:bg-slate-700 py-4 w-full items-center">
      <h1
        className={cn(
          "py-2 text-3xl text-center font-normal text-black dark:text-white",
          roboto.className
        )}
      >
        Mods World
      </h1>
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="border border-blue-600 rounded-3xl bg-white dark:bg-slate-800 p-5"
            >
              <Image
                src={"/test.png"}
                height={100}
                width={100}
                className="rounded-3xl h-fit w-full py-2"
                alt="reddit png"
              />
              <h1 className="text-lg font-medium text-white text-center">
                Reddit Mod apk
              </h1>
              <p className="text-sm text-white/86">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                corrupti blanditiis corporis. Nobis,
              </p>
              <Button className="w-full mt-3" variant={"default"} asChild>
                <Link href="/abc">View More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
