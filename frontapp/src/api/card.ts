import END_POINT from "./endPoint";
import axiosInstance from "./interceptor";

export const getCards = async () => {
  const { data } = await axiosInstance.get(`${END_POINT.card}`);

  return data;
};

export const getCardById = async (id: number) => {
  const { data } = await axiosInstance.get(`${END_POINT.cardDetail(id)}`);

  return data;
};

export const postCard = async (title: string, summary: string) => {
  // API 요청 시뮬레이션 (3초 후 응답)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { success: true, title, summary } });
    }, 3000);
  });
  // const { data } = await axiosInstance.post(`${END_POINT.bookCards}`, {
  //   title,
  //   summary,
  // });

  // return data;
};
