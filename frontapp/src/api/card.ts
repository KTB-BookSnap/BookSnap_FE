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
