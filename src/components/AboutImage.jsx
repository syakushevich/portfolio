import React, { useState, useRef, useEffect } from 'react';

const AboutImage = ({ image, mask, back }) => {
  const cardRef = useRef(null);
  const [lettersContent, setLettersContent] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const randomChar = () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)];
  const randomString = (length) => Array.from({ length }, randomChar).join('');

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setPosition({ x, y });
    setLettersContent(randomString(1500));
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
      };
    }
  }, []);

  return (
    <div className="w-[340px] h-[340px] relative mt-12 mb-12">
        <div className="card" ref={cardRef}>
          <div className="card-image">
            <img src={image} alt="" className="cursor-crosshair" />
          </div>
          <div className="card-mask">
            <img src={mask} alt="" className="cursor-crosshair" />
          </div>
          <div className="card-background">
            <img src={back} alt="" className="cursor-crosshair" />
          </div>
          <img
            src={mask}
            alt="Blurred Background"
            className="blurred"
          />
          <div className="card-black-square"></div>
          <div className="card-letters" style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }}>
            {lettersContent}
          </div>
        </div>
    </div>
  );
};

export default AboutImage;


