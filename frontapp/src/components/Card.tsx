'use client';

import Image from 'next/image';
import LeftArrow from '@/icons/left-arrow.svg';
import RightArrow from '@/icons/right-arrow.svg';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card(data: any) {
  const [cardIndex, setCardIndex] = useState(0);

  const calculateIndex = (type: number) => {
    if ((cardIndex === 0 && type === 0) || (cardIndex === data.data.length - 1 && type === 1)) {
      return;
    } else if (type === 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  useEffect(() => {
    console.log(cardIndex);
  }, [cardIndex]);
  return (
    <div className="flex flex-row items-center gap-5">
      <Image
        onClick={() => {
          calculateIndex(0);
        }}
        src={LeftArrow}
        alt="왼쪽 화살표"
        width={30}
        height={100}
      />
      <div className="flex flex-col items-center width-[500px] gap-5">
        <div className="relative w-[250px] h-[350px] drop-shadow-md">
          {data.data[cardIndex]?.imageUrl ? (
            <Image
              src={data.data[cardIndex].imageUrl} // `?.` 사용 X (이미 존재 확인했음)
              alt="썸네일"
              fill={true}
              style={{ objectFit: 'cover' }} // objectFit 사용 시 style 적용
            />
          ) : (
            <p>로딩 중...</p>
          )}
        </div>
        <div className="text-amber-950">{data.data[cardIndex]?.phrase}</div>
      </div>
      <Image
        onClick={() => {
          calculateIndex(1);
        }}
        src={RightArrow}
        alt="오른쪽 화살표"
        width={30}
        height={100}
      />
    </div>
  );
}
