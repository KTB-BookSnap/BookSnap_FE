"use client";

import Header from "@/components/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <button onClick={() => router.push("/card")} className="text-amber-950">
        card modal page로
      </button>
    </div>
  );
}
