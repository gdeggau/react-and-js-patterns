import React from "react";

export const DogImages = ({ dogs }: { dogs: string[] }) => {
  return (
    <>
      {dogs.map((dog, i) => (
        <img src={dog} key={i} alt="Dog" />
      ))}
    </>
  );
};
