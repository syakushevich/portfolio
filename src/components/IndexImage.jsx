import React from 'react';

const IndexImage = ({ imgRef, maskRef, image }) => {
  return (
    <div className="w-[340px] h-[340px] flex items-center justify-center relative mt-12 mb-12">
      <img ref={imgRef} src={image} className="w-full h-full object-cover cover absolute cursor-crosshair" />
      <div ref={maskRef} className="mask-style"></div>
      <img
        src={image}
        alt="Blurred Background"
        className="blurred"
      />
    </div>
  );
};

export default IndexImage;
