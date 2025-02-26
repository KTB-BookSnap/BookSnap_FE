export interface ICardDetailResponse {
  success: boolean;
  data: { title: string; cards: ICardDataDetail[] };
  error: { code: string };
}

export interface ICardDataDetail {
  imageUrl: string;
  phrase: string;
}
