"use client";

import DimmedScreen from "@/components/DimmedScreen";
import Image from "next/image";
import CloseIcon from "@/icons/close.svg";
import { useEffect } from "react";
import Card from "@/components/Card";
import { useRouter, useParams } from "next/navigation";
import { useCardDetailQuery } from "@/hooks/api/useCardListQuery";

export default function CardModalPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const { data, isLoading, error } = useCardDetailQuery(id);

  useEffect(() => {
    const id = Number(params.id);

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  console.log(data);

  const handleDimmedClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.back();
  };

  const handleDialogClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>오류발생</p>;

  return (
    <div
      className="fixed inset-0 w-full h-full flex items-center justify-center z-20"
      onClick={handleDimmedClick}
    >
      <div
        className="flex flex-col items-center gap-5 bg-amber-50 pt-5 pr-5 pb-10 pl-5 rounded-3xl z-10 shadow-lg"
        onClick={handleDialogClick}
      >
        <Image
          src={CloseIcon}
          alt="모달 닫기 버튼"
          width={20}
          height={20}
          className="self-end"
          onClick={() => router.back()}
        />
        <Card data={data} />
      </div>
      <DimmedScreen />
    </div>
  );
}
