import React from 'react';
import AboutImage from '../components/AboutImage';
import knight from '../images/knight_iii.png';
import back from '../images/knight_back.png';
import mask from '../images/knight_bg_4.png';
import '../styles/vintageImageOverlay.css';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="container mx-auto text-black rubik-font">
      <div className="flex flex-row justify-between items-center w-[var(--content-width)] max-w-full relative">
        <div className="font-bold w-[340px]">
          <h1 className="custom-h1">About</h1>
        </div>
        <AboutImage image={knight} mask={mask} back={back} />
      </div>

      <p className="mt-4 text-lg custom-text">
        I'm excited at the prospect of bringing my skills and approach to your team. If you're looking for someone dedicated to creating outstanding software solutions and nurturing emerging talent in the tech field, please feel free to reach out. I'm eager to explore how we can work together for mutual success.
      </p>
    </div>
  );
}

export default AboutPage;
