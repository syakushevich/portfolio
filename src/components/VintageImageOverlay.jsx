import React from 'react';

const VintageImageOverlay = ({ image, noise }) => {
  return (
    <div className="w-[340px] h-[340px] relative mt-12 mb-12">
      <div className="wrapper">
        <img
          src={image}
          alt="Blurred Background"
          className="blurred"
        />
        <img
          src={image}
          alt="Cover"
          className="cover"
        />
        <img
          src={noise}
          alt="Static Overlay"
          className="static-overlay"
        />
      </div>
    </div>
  );
};

export default VintageImageOverlay;
