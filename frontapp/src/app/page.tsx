"use client";

import Header from "@/components/header";
import { useCardMutation } from "@/hooks/api/useCardMutation";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const { mutate, isPending } = useCardMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      { title, summary: content },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
        },
      }
    );

    router.push("bookshelf");
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <Header />
      <div className="flex flex-col justify-start items-center w-full h-screen bg-amber-50">
        <p className="text-[2.5rem] block text-amber-950 font-bold mb-1 mt-10">
          카드를 생성할 소설의 내용을 입력해주세요
        </p>
        <form onSubmit={handleSubmit} className="w-[80%] space-y-4 mt-12">
          {/* 제목 입력 */}
          <div className="flex flex-col justify-start items-center">
            <label className="text-[1.5rem] w-[68%] text-amber-950 font-bold mb-1">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-[70%] h-[62px] p-[10px] text-amber-950 text-xl border border-amber-950 rounded-[12px] bg-white focus:outline-none focus:ring-2 focus:ring-amber-950 mt-3"
              required
            />
          </div>

          {/* 내용 입력 */}
          <div className="flex flex-col justify-start items-center">
            <label className="text-[1.5rem] w-[88%] block  text-amber-950 font-bold mb-1">
              내용
            </label>
            <textarea
              className="w-[90%] h-[200px] px-3 py-2 text-amber-950 border border-amber-950 rounded-[12px] bg-white focus:outline-none focus:ring-2 focus:ring-amber-950 mt-3 "
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              required
            ></textarea>
          </div>

          {/* 제출 버튼 */}
          <div className="w-[95%] flex justify-end items-center">
            <button
              type="submit"
              className="w-[13%] bg-amber-950 text-white py-2 rounded-[12px] transition mt-5"
            >
              {isPending ? "처리 중..." : "제출"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
