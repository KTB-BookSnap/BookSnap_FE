export interface IBooksResponse {
  success: boolean;
  data: IBook[];
  error: { code: string };
}

export interface IBook {
  bookId: number;
  title: string;
  thumbnailUrl: string;
}
