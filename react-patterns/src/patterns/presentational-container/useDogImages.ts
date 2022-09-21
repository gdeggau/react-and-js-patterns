import { useQuery } from "react-query";
import { fetchDogImages } from "./fetchDogImages";

export const useDogImages = () => {
  return useQuery("dogsImages", fetchDogImages);
};
