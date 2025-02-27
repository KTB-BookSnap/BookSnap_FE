import { postCard } from "@/api/card";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCardMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ title, summary }: { title: string; summary: string }) => {
      const response = await postCard(title, summary);
      return response.data;
    },
    onSuccess: () => {
      // 응답 성공시 수행할 일 넣어주기
      router.push("/");
    },
  });
}
