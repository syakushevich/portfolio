import React from 'react';
import useXRayEffect from '../components/useXRayEffect';
import IndexImage from '../components/IndexImage';
import vikings from '../images/vikings.jpg';

function IndexBlock() {
  const { imgRef, maskRef } = useXRayEffect();

  return (
    <div className="container mx-auto text-black rubik-font">
      <div className="flex flex-row justify-between items-center w-[var(--content-width)] max-w-full relative">
        <div className="font-bold w-[340px]">
          <h1 className="custom-h1">Let's work together</h1>
        </div>
        <IndexImage imgRef={imgRef} maskRef={maskRef} image={vikings} />
      </div>

      <div className="my-9">
        <p className="mt-4 text-lg custom-text">
          I'm excited at the prospect of bringing my skills and approach to your team. If you're looking for someone dedicated to creating outstanding software solutions and nurturing emerging talent in the tech field, please feel free to reach out. I'm eager to explore how we can work together for mutual success.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg custom-text">
          <li>User-Centric Application Development: identifying and improving challenging aspects from the user's perspective.</li>
          <li>Data Visualization: transforming complex data into clear and engaging narratives.</li>
          <li>Team Dynamics and Efficiency: resolving bottlenecks for more efficient development and delivery.</li>
          <li>Technical Expertise and Code Review: offering insights into best practices and suggestions for improvement.</li>
          <li>Mentorship and Junior Developer Support: guiding and nurturing emerging talent in the tech field.</li>
        </ul>
      </div>
    </div>
  );
}

export default IndexBlock;
