import React from "react";
import { withLoader } from "./withLoader";
import { withHover } from "./withHover";
import { useHover } from "./useHover";

function DogImages(props: any) {
  const [hoverRef, hovering] = useHover();
  return (
    <div ref={hoverRef} {...props}>
      {hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog: string, index: number) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
}

export const DogImagesHOC = withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
