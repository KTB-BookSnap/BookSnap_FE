import END_POINT from "./endPoint";
import axiosInstance from "./interceptor";

export const getBooks = async () => {
  const { data } = await axiosInstance.get("/books");
  return data;
};
