import React, { useEffect, useRef } from 'react';

const useXRayEffect = () => {
  const imgRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    const mask = maskRef.current;

    const handleMouseMove = (event) => {
      const rect = image.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const maskSize = 100; // Assuming the mask is 100x100 pixels

      mask.style.left = `${x - maskSize / 2}px`;
      mask.style.top = `${y - maskSize / 2}px`;
    };

    const showMask = () => {
      mask.style.display = 'block';
    };

    const hideMask = () => {
      mask.style.display = 'none';
    };

    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseenter', showMask);
    image.addEventListener('mouseleave', hideMask);

    // Clean up
    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseenter', showMask);
      image.removeEventListener('mouseleave', hideMask);
    };
  }, []);

  return { imgRef, maskRef };
};

export default useXRayEffect;
