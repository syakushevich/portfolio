import React, { useState } from 'react';

const FirstProject = () => {
  const [activeTech, setActiveTech] = useState('');
  const [detail, setDetail] = useState('Select a technology to see details.');

  const updateDetails = (tech) => {
    setActiveTech(tech.name);
    setDetail(tech.description);
  };

  const technologies = [
    [
      { name: 'Ruby', description: "I utilized Ruby on Rails for backend development, focusing on integrating APIs and building performance-oriented code. This powerful framework allowed for rapid development and clean, maintainable code that effectively handles complex business logic and data transactions." },
      { name: 'RSpec', description: "For testing, I employed RSpec, using it extensively for both acceptance and integration tests. I ensured reliable mocking of external API calls with cassettes, which facilitated consistent test environments and streamlined our testing process by reproducing predictable and controlled responses." },
      { name: 'React', description: "In the frontend, React was my go-to for building responsive and dynamic user interfaces. Alongside component development, I also maintained Cypress tests to ensure that the components behaved as expected across updates, enhancing the robustness and reliability of the UI." }
    ],
    [
      { name: 'Postgresql', description: "With PostgreSQL, I designed new tables and updated existing ones to optimize performance and scalability. I implemented constraints and indices to enforce data integrity and improve query efficiency, which significantly enhanced the database's responsiveness and reliability." },
      { name: 'Docker', description: "Docker was instrumental in containerizing the application, database, and frontend, which simplified our development and deployment processes. By using Docker, we achieved a consistent environment across different stages of development, reducing the 'it works on my machine' issues significantly." },
      { name: 'Kubernetes', description: "For deployment and management, I utilized Kubernetes, which streamlined deploying updates and managing application staging and production environments. Kubernetes provided the tools necessary for efficient scaling, self-healing, and load balancing, thereby enhancing our operational capabilities." }
    ]
  ]

  return (
    <div className="pb-16 project-container">
      <div className="overflow-hidden">
        <div className="rubik-font">
          <div className="mx-auto text-center">
            <h2 className="custom-h2-regate mb-12">
              Regate
            </h2>
            <p className="my-9 text-lg custom-text text-left">
              Automated accounting processes in a high-traffic French fintech startup.
              Led the integration of numerous payment and finance APIs.
              Enhanced software reliability and user experience by with Cypress and RSpec.
              Deployed and maintained the project using Docker, utilizing Rails 6 and Ruby 3.
              Proactively monitored and resolved potential issues using Datadog, significantly reducing error rates and improving system stability.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto py-12 lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Technologies</h2>
            <ul className="flex justify-between pb-24">
              {technologies[0].map(tech => (
               <li key={tech.name} data-text={tech.name} className="li-tech cursor-pointer" onClick={() => updateDetails(tech)}>
                 <a className={`items-center tech-icon ${activeTech === tech.name ? 'tech-active' : ''}`}>
                   <i className={`devicon-${tech.name.toLowerCase()}-plain text-6xl`}></i>
                   <span data-text={tech.name}></span>
                 </a>
               </li>
              ))}
            </ul>
            <ul className="flex justify-between">
              {technologies[1].map(tech => (
                <li key={tech.name} data-text={tech.name} className="li-tech cursor-pointer" onClick={() => updateDetails(tech)}>
                  <a className={`items-center tech-icon ${activeTech === tech.name ? 'tech-active' : ''}`}>
                    <i className={`devicon-${tech.name.toLowerCase()}-plain text-6xl`}></i>
                    <span data-text={tech.name}></span>
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

export default FirstProject;
