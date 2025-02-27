"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface IBook {
  src: string;
  title: string;
  id: number;
}

export default function Book({ src, title, id }: IBook) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-start gap-[10px] px-5 w-fit"
      onClick={() => router.push(`/card/${id}`)}
    >
      <div className="relative w-[250px] h-[350px] drop-shadow-md">
        {src && <Image src={src} alt="썸네일" fill={true} objectFit="cover" />}
      </div>
      <div className="flex flex-row pl-[10px] items-start text-amber-950">{title}</div>
    </div>
  );
}
