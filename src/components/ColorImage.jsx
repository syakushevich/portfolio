import React, { useState } from 'react';
import ColorEffect from './ColorEffect';

function ColorImage({ image }) {
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const [isMaskVisible, setIsMaskVisible] = useState(false);
  const maskSize = 100; // Radius of the circle in pixels
  const imgContainerRef = ColorEffect(setMaskPosition, setIsMaskVisible);

  return (
    <div ref={imgContainerRef} className="w-[340px] h-[340px] flex items-center justify-center relative mt-12 mb-12">
      <img src={image} alt="Blurred Background" className="h-full object-cover" style={{ filter: 'grayscale(100%) blur(15px)' }}  />
      {/* Grayscale image always visible */}
      <img
        src={image}
        alt="Grayscale"
        className="w-full h-full object-cover absolute cursor-crosshair"
        style={{ filter: 'grayscale(100%)' }}
      />

      {/* Color image shown only through mask when hovering */}
      <img
        src={image}
        alt="Color"
        className="w-full h-full object-cover absolute cursor-crosshair"
        style={{
          display: isMaskVisible ? 'block' : 'none', // Controls display based on hover
          clipPath: `circle(${maskSize}px at ${maskPosition.x}px ${maskPosition.y}px)`, // Clip path to create circular mask
          WebkitClipPath: `circle(${maskSize}px at ${maskPosition.x}px ${maskPosition.y}px)` // For Safari compatibility
        }}
      />
    </div>
  );
}

export default ColorImage;
