import DimmedScreen from "@/components/DimmedScreen";
import Image from "next/image";
import LeftArrow from "@/icons/left-arrow.svg";
import RightArrow from "@/icons/right-arrow.svg";
import CloseIcon from "@/icons/close.svg";

export default function CardModalPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 bg-amber-50 pt-5 pr-5 pb-10 pl-5 rounded-3xl z-10 shadow-lg">
        <Image
          src={CloseIcon}
          alt="모달 닫기 버튼"
          width={20}
          height={20}
          className="self-end"
        />
        <div className="flex flex-row items-center gap-5">
          <Image src={LeftArrow} alt="왼쪽 화살표" width={30} height={100} />
          <div className="flex flex-col items-center width-[500px] gap-5">
            <Image
              src="/images/sampleImage.jpg"
              alt="샘플이미지"
              width={450}
              height={300}
            />
            <div className="text-amber-950">예시 텍스트입니다.</div>
          </div>
          <Image src={RightArrow} alt="오른쪽 화살표" width={30} height={100} />
        </div>
      </div>
      <DimmedScreen />
    </div>
  );
}
