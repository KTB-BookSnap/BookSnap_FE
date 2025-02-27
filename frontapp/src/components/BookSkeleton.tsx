"use client";

import { useEffect, useState } from "react";

export default function BookSkeleton() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // 깜빡이는 효과를 위한 인터벌 설정
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 800); // 0.8초마다 깜빡임

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start gap-[10px] px-5 w-fit">
      <div
        className={`relative w-[250px] h-[350px] drop-shadow-md ${
          pulse ? "bg-amber-950/50" : "bg-amber-950/30"
        } transition-colors duration-500`}
      />
      <div
        className={`w-[150px] h-[20px] ${
          pulse ? "bg-amber-950/50" : "bg-amber-950/30"
        } transition-colors duration-500 rounded`}
      />
    </div>
  );
}
