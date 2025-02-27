import Image from "next/image";
import CloseIcon from "@/icons/close.svg";
import Card from "@/components/Card";

export default function CardPage() {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-20">
      <div className="flex flex-col items-center gap-5 bg-amber-50 pt-5 pr-5 pb-10 pl-5 rounded-3xl z-10 shadow-lg">
        <Image src={CloseIcon} alt="모달 닫기 버튼" width={20} height={20} className="self-end" />
        <Card phrase="예시 텍스트입니다." />
      </div>
    </div>
  );
}
