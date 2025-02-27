"use client";

import { useEffect, useState } from "react";
import loadingAnimation from "../../public/animations/bookLoadingAnimation.json";
import Lottie from "react-lottie-player";

export default function BookSkeleton() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // 깜빡이는 효과를 위한 인터벌 설정
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1000); // 1초마다 깜빡임

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start gap-[10px] px-5 w-fit">
      <div
        className={`relative w-[250px] h-[350px] drop-shadow-md ${
          pulse ? "bg-amber-950/50" : "bg-amber-950/40"
        } transition-colors duration-500`}
      >
        <Lottie
          loop
          animationData={loadingAnimation}
          play
          className="w-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div
        className={`w-[150px] h-[20px] ${
          pulse ? "bg-amber-950/50" : "bg-amber-950/40"
        } transition-colors duration-500 rounded`}
      />
    </div>
  );
}
