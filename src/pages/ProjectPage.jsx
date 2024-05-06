import React from 'react';

import VintageImageOverlay from '../components/VintageImageOverlay';
import FirstProject from '../components/FirstProject';
import SecondProject from '../components/SecondProject';
import ThirdProject from '../components/ThirdProject';

import alien from '../images/alien.jpg';
import noise from '../images/noise.gif';

import '../styles/project.css';
import '../styles/imageWithBlur.css';
import '../styles/vintageImageOverlay.css';

function ProjectPage() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-[var(--content-width)] max-w-full relative">
        <div className="font-bold w-[340px]">
          <h1 className="custom-h1">Projects</h1>
        </div>
        <VintageImageOverlay image={alien} noise={noise} />
      </div>
      <FirstProject />
      <SecondProject />
      <ThirdProject />
    </div>
  );
}

export default ProjectPage;
