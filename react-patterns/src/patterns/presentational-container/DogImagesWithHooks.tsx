import { useDogImages } from "./useDogImages";

export const DogImages = () => {
  const { data } = useDogImages();
  return (
    <>
      {data?.message.map((dog, i) => (
        <img src={dog} key={i} alt="Dog" />
      ))}
    </>
  );
};
