import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/api/book";
import { IBooksResponse } from "@/types/api/books";

export function useBooksQuery() {
  return useQuery({
    queryKey: ["books"], // 모든 책 데이터를 위한 queryKey
    queryFn: async () => {
      const response = await getBooks(); // 모든 책 리스트를 불러오는 GET 요청
      return response.data;
    },
  });
}
