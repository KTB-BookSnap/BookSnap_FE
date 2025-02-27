'use client';

import { useRouter } from 'next/navigation';

interface IBook {
  src: string;
  title: string;
  id: number;
}

/* eslint-disable @next/next/no-img-element */
export default function Book({ src, title, id }: IBook) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-[10px] px-5 w-fit" onClick={() => router.push(`/card/${id}`)}>
      <div className="relative w-[250px] h-[350px] drop-shadow-md">
        {src && <img src={decodeURIComponent(src)} alt="S3 이미지" width={250} height={300} />}
      </div>
      <div className="flex flex-row pl-[10px] items-start text-amber-950 mt-4">{title}</div>
    </div>
  );
}
