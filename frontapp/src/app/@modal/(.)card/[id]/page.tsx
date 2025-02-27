"use client";

import DimmedScreen from "@/components/DimmedScreen";
import Image from "next/image";
import CloseIcon from "@/icons/close.svg";
import { useEffect } from "react";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

export default function CardModalPage() {
  const router = useRouter();

  const handleDimmedClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.back();
  };

  const handleDialogClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
        <Card phrase="예시 텍스트입니다." />
      </div>
      <DimmedScreen />
    </div>
  );
}
