import axios from "axios";

type DogsRes = {
  message: string[];
};

export const fetchDogImages = async () => {
  const { data } = await axios.get<DogsRes>(
    "https://dog.ceo/api/breed/labrador/images/random/6"
  );
  return data;
};
