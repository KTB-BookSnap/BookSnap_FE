"use client";

import Book from "@/components/Book";
import BookSkeleton from "@/components/BookSkeleton";
import Header from "@/components/header";
import { useBooksQuery } from "@/hooks/api/useBooksQuery";
import { IBook } from "@/types/api/books";

export default function BookShelf() {
  const { data, isLoading, error } = useBooksQuery();

  if (error) return <p>오류발생</p>;

  return (
    <div className="flex flex-col gap-[20px]">
      <Header />
      <div className="text-amber-950 text-4xl text-center">카드를 보고 싶은 책을 선택해주세요</div>
      <div className="w-full flex flex-row flex-wrap gap-[80px] items-center justify-center p-5">
        {isLoading ? (
          <>
            <BookSkeleton />
            <BookSkeleton />
            <BookSkeleton />
          </>
        ) : (
          data.map((book: IBook) => (
            <Book key={book.bookId} src={book.thumbnailUrl} title={book.title} id={book.bookId} />
          ))
        )}
      </div>
    </div>
  );
}
