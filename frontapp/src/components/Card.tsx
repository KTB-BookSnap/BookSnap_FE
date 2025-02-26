"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ICard {
  src: string;
  title: string;
  id: number;
}

export default function Card({ src, title, id }: ICard) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-start gap-[10px] px-5 w-fit"
      onClick={() => router.push(`/card/${id}`)}
    >
      <div className="relative w-[250px] h-[350px]">
        {src && <Image src={src} alt="썸네일" fill={true} objectFit="cover" />}
      </div>
      <div className="flex flex-row pl-[10px] items-start text-amber-950">{title}</div>
    </div>
  );
}
