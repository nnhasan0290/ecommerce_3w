import React from "react";

import ReactImageMagnify from "react-image-magnify";
import { clientImages } from "../../../assets/imgs/client";

const ImageMagnify = () => {
  return (
    <div style={{ width: "100%" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: clientImages.loginPageImg,
          },
          largeImage: {
            src: clientImages.loginPageImg,
            width: 2000,
            height: 2000,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "200%",
            height: "150%",
          },
        }}
      />
    </div>
  );
};

export default ImageMagnify;
