import { postCard } from "@/api/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCardMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createBook"],
    mutationFn: async ({ title, summary }: { title: string; summary: string }) => {
      const response = await postCard(title, summary);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      router.refresh();
    },
  });
}
