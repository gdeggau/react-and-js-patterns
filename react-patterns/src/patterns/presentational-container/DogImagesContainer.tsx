import { useQuery } from "react-query";
import { DogImages } from "./DogImages";
import { fetchDogImages } from "./fetchDogImages";

export const DogImagesContainer = () => {
  const { data } = useQuery("dogsImages", fetchDogImages);

  return <DogImages dogs={data?.message ?? []} />;
};
