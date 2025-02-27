"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="sticky top-0 w-full h-[80px] bg-amber-950  flex justify-start items-center px-5 gap-7">
      <Link href="/" className="text-amber-50 text-[2.5rem]">
        📚 &nbsp;BookSnap
      </Link>
      <button
        className="bg-amber-50 text-amber-950 text-lg px-3 py-1 rounded-md"
        onClick={() => router.push("/bookshelf")}
      >
        book shelf
      </button>
    </div>
  );
}
