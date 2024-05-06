import React, { useState } from 'react';

const ThirdProject = () => {
  const [activeTech, setActiveTech] = useState('');
  const [detail, setDetail] = useState('Select a technology to see details.');

  const technologies = [
    [
      { name: 'Ruby', shortName: 'Ruby', description: "Utilized Ruby for developing robust backend processes, contributing significantly to both new feature development and existing system optimizations." },
      { name: 'MySQL', shortName: 'MySQL', description: "Managed and optimized MySQL databases before transitioning to Elasticsearch to improve the performance and scalability of data handling operations." },
      { name: 'Elasticsearch', shortName: 'Elastic', description: "Enhanced search functionalities by migrating from MySQL to Elasticsearch, achieving over 60% improvement in search operation speed and efficiency." }
    ],
    [
      { name: 'Coffeescript', shortName: 'CoffeeScript', description: "Developed interactive and responsive frontend features using Coffeescript, contributing to an enhanced user experience and richer client-side interactions." },
      { name: 'Amazonwebservices', shortName: 'AWS', description: "Implemented AWS S3 for efficient large-scale file storage solutions, ensuring high availability and reliability of multimedia content storage." },
      { name: 'Kubernetes', shortName: 'Kubernetes', description: "Deployed and managed the application scaling and operations using Kubernetes, facilitating better resource management and deployment strategies across services." }
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
              Product Madness
            </h2>
            <p className="my-9 text-lg custom-text text-left">
              Key contributor to a major web project, serving over 50 million active users. Drove the development of new features and modules, elevating user experience and platform capabilities. Excelled in full-stack development, handling both frontend and backend improvements. Optimized performance, notably by migrating data from MySQL to Elasticsearch, which enhanced search functionality and speed by over 60%. Implemented and refined testing protocols and scripts, slashing bug rates and accelerating development cycles.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto py-12 lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Technologies</h2>
            <ul className="flex justify-between pb-20">
              {technologies[0].map(tech => (
               <li key={tech.name} data-text={tech.name} className="li-tech cursor-pointer" onClick={() => updateDetails(tech)}>
                 <a className={`items-center tech-icon ${activeTech === tech.name ? 'tech-active' : ''}`}>
                   <i className={`devicon-${tech.name.toLowerCase()}-plain text-6xl`}></i>
                   <span data-text={tech.shortName}></span>
                 </a>
               </li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {technologies[1].map(tech => (
               <li key={tech.name} data-text={tech.name} className="li-tech cursor-pointer" onClick={() => updateDetails(tech)}>
                 <a className={`items-center tech-icon ${activeTech === tech.name ? 'tech-active' : ''}`}>
                   <i className={`devicon-${tech.name.toLowerCase()}-plain text-6xl`}></i>
                   <span data-text={tech.shortName}></span>
                 </a>
               </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Details</h2>
            <p className="mt-4 text-gray-500">
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdProject;
