import { useQuery } from "@tanstack/react-query";
import { getCardById } from "@/api/card";
import { ICardDetailResponse } from "@/types/api/cardDetail";

export function useCardDetailQuery(cardId: number) {
  return useQuery<ICardDetailResponse>({
    queryKey: ["cardDetail", cardId],
    queryFn: async () => {
      const response = await getCardById(cardId);
      return response.data;
    },
    enabled: !!cardId,
  });
}
