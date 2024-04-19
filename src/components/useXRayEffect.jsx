import React, { useEffect, useRef } from 'react';

const useXRayEffect = () => {
  const imgRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    const maskElement = maskRef.current;

    const handleMouseMove = (event) => {
      const rect = imgElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const maskSize = 100; // Assuming the mask is 100x100 pixels

      maskElement.style.left = `${x - maskSize / 2}px`;
      maskElement.style.top = `${y - maskSize / 2}px`;
    };

    const showMask = () => {
      maskElement.style.display = 'block';
    };

    const hideMask = () => {
      maskElement.style.display = 'none';
    };

    imgElement.addEventListener('mousemove', handleMouseMove);
    imgElement.addEventListener('mouseenter', showMask);
    imgElement.addEventListener('mouseleave', hideMask);

    // Clean up
    return () => {
      imgElement.removeEventListener('mousemove', handleMouseMove);
      imgElement.removeEventListener('mouseenter', showMask);
      imgElement.removeEventListener('mouseleave', hideMask);
    };
  }, []);

  return { imgRef, maskRef };
};

export default useXRayEffect;
