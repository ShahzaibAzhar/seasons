import React from "react";

const ImageList = (props) => {
  return (
    <div>
      {props.images.map((image) => {
        return (
          <div>
            <img alt={image.description} src={image.urls.regular} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
