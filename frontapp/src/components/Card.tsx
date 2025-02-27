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
    console.log('1:', data.data[cardIndex], '2:', data.data, '3:', data.data[cardIndex].imageUrl);
  }, [cardIndex]);

  const imgData = [
    'https://s3-booksnap-test.s3.ap-northeast-2.amazonaws.com/prince_1.png',
    'https://s3-booksnap-test.s3.ap-northeast-2.amazonaws.com/prince_2.png',
    'https://s3-booksnap-test.s3.ap-northeast-2.amazonaws.com/prince_3.png',
    'https://s3-booksnap-test.s3.ap-northeast-2.amazonaws.com/prince_4.png',
  ];

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
          {/* {data.data[cardIndex]?.imageUrl && (
            <img src={decodeURIComponent(data.data[cardIndex].imageUrl)} style={{ width: '250px', height: '320px' }}></img>
          )} */}
          <img src={imgData[cardIndex]} style={{ width: '250px', height: '320px' }}></img>
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
