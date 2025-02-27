import Image from "next/image";
import LeftArrow from "@/icons/left-arrow.svg";
import RightArrow from "@/icons/right-arrow.svg";

interface ICard {
  thumbnailUrl?: string;
  phrase: string;
}

export default function Card({ thumbnailUrl, phrase }: ICard) {
  return (
    <div className="flex flex-row items-center gap-5">
      <Image src={LeftArrow} alt="왼쪽 화살표" width={30} height={100} />
      <div className="flex flex-col items-center width-[500px] gap-5">
        <Image
          src={thumbnailUrl || "/images/sampleImage.jpg"}
          alt="샘플이미지"
          width={450}
          height={300}
        />
        <div className="text-amber-950">{phrase}</div>
      </div>
      <Image src={RightArrow} alt="오른쪽 화살표" width={30} height={100} />
    </div>
  );
}
