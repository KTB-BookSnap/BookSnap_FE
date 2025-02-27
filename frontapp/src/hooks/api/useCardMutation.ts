import { postCard } from "@/api/card";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCardMutation() {
  const router = useRouter();

  return useMutation({
    mutationKey: ["createBook"],
    mutationFn: async ({ title, summary }: { title: string; summary: string }) => {
      const response = await postCard(title, summary);
      return response.data;
    },
    onSuccess: () => {
      router.refresh();
    },
  });
}
