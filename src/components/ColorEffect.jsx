import { useEffect, useRef } from 'react';

const ColorEffect = (maskPositionSetter, setMaskVisibility) => {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const container = imgContainerRef.current;
    if (!container) return; // Exit if container is not available

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      maskPositionSetter({ x, y }); // Update the mask position
    };

    const showMask = () => setMaskVisibility(true);
    const hideMask = () => setMaskVisibility(false);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', showMask);
    container.addEventListener('mouseleave', hideMask);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', showMask);
      container.removeEventListener('mouseleave', hideMask);
    };
  }, [maskPositionSetter, setMaskVisibility]);

  return imgContainerRef;
};

export default ColorEffect;
