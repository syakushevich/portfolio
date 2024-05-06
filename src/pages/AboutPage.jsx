import React from 'react';
import ColorImage from '../components/ColorImage';
import lab from '../images/lab.jpg';

function AboutPage() {
  return (
    <div className="container mx-auto text-black rubik-font">
      <div className="flex flex-row justify-between items-center w-[var(--content-width)] max-w-full relative">
        <div className="font-bold w-[340px]">
          <h1 className="custom-h1">About</h1>
        </div>
        <ColorImage image={lab} />
      </div>

      {/* Additional information about sources and links */}
      <div className="mt-6">

        <p className="mt-2 text-lg custom-text">
          The visual effects on this page were inspired by resources found at
          {' '}<a href="https://codepen.io/Hyperplexed" className="text-blue-500 hover:text-blue-700">CodePen by Hyperplexed</a>
          . Discover more cool stuff there!
        </p>
        <p className="mt-2 text-lg custom-text">
          Illustrations on this site were beautifully created by:
          {' '}<a href="https://www.behance.net/Dextermaurer" className="text-blue-500 hover:text-blue-700">Dexter Maurer</a>
          {' '}and
          {' '}<a href="https://www.behance.net/KatyaDo" className="text-blue-500 hover:text-blue-700">Katya Dorokhina</a>.
        </p>
        <p className="mt-2 text-lg custom-text">
          This site was styled using
          {' '}<a href="https://tailwindcss.com" className="text-blue-500 hover:text-blue-700">Tailwind CSS</a>,
          an utility-first CSS framework for rapid UI development.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
