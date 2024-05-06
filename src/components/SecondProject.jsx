import React, { useState } from 'react';

const SecondProject = () => {
  const [activeTech, setActiveTech] = useState('');
  const [detail, setDetail] = useState('Select a technology to see details.');

  const technologies = [
    [
      { name: 'Ruby', description: "Utilized Ruby on Rails for robust backend solutions, integrating complex APIs and optimizing code for high performance in e-commerce applications." },
      { name: 'RSpec', description: "Employed RSpec for thorough testing, enhancing the reliability of the platform through extensive acceptance and integration tests." },
      { name: 'Docker', description: "Used Docker to containerize the application, ensuring consistency across development, testing, and production environments, simplifying deployment processes." }
    ],
    [
      { name: 'Postgresql', description: "Managed and optimized Postgres databases, designing schemas and improving data handling for increased efficiency in transaction processing." },
      { name: 'Git', description: "Leveraged Git for version control, managing source code changes, and enhancing collaboration across development teams." },
      { name: 'Coffeescript', description: "Developed dynamic front-end features using Coffeescript, improving interactivity and user experience on the e-commerce platform." }
    ]
  ];

  const updateDetails = (tech) => {
    setActiveTech(tech.name);
    setDetail(tech.description);
  };

  return (
    <div className="pb-16 project-container">
      <div className="overflow-hidden">
        <div className="rubik-font">
          <div className="mx-auto text-center">
            <h2 className="custom-h2-regate mb-12">
              Aristek Systems
            </h2>
            <p className="my-9 text-lg custom-text text-left">
              Played major role in launching and scaling an e-commerce platform specializing in prints and merchandise. Successfully deployed the online store, significantly improving market reach and customer engagement. Did automation of testing processes, leading to a 40% increase in deployment efficiency. Designed and developed new site modules, enhancing user experience and functionality.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto py-12 lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Technologies</h2>
            <ul className="flex justify-between pb-24">
              {technologies[0].map(tech => (
               <li key={tech.name} data-text={tech.name} className="li-tech cursor-pointer" onClick={() => updateDetails(tech)}>
                 <a className={`items-center space-y-2 tech-icon ${activeTech === tech.name ? 'tech-active' : ''}`}>
                   <i className={`devicon-${tech.name.toLowerCase()}-plain text-6xl`}></i>
                   <span data-text={tech.name}></span>
                 </a>
               </li>
              ))}
            </ul>
            <ul className="flex justify-between pb-24">
              {technologies[1].map(tech => (
               <li key={tech.name} data-text={tech.name} className="li-tech cursor-pointer" onClick={() => updateDetails(tech)}>
                 <a className={`items-center space-y-2 tech-icon ${activeTech === tech.name ? 'tech-active' : ''}`}>
                   <i className={`devicon-${tech.name.toLowerCase()}-plain text-6xl`}></i>
                   <span data-text={tech.name}></span>
                 </a>
               </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Details</h2>
            <p className="mt-4 text-gray-500">
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProject;
