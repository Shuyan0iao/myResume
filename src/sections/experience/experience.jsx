import React, { useState } from 'react';
import ExperienceDetail from './ExperienceDetail';
import Modal from './Modal';

const experienceData = [

  {
    title: 'Software engineer',
    company: 'Airclub software',
    year: '2023 - 2024',
    description: 'Contributed to the development and maintenance of an integrated software platform',
    details: [
      'Contributed to the development and maintenance of an integrated software platform using TypeScript, React, Node.js, GraphQL, and Tailwind CSS, from requirements gathering to final implementation.',
      'Led the development of the membership application independently, including the user interface. Collaborated with the visual design team using Figma. Ensured compatibility with older browsers, building complete functionalities using either graceful degradation or progressive enhancement as needed.',
      'Optimized initial page load time using dynamic import and code splitting technologies, loading specific modules only when needed. Reduced unnecessary asynchronous data requests and lazy-loaded non-visible components to minimize rendering blockages.',
      'Compressed all images in the project using ImageOptim, achieving an average compression rate of 40%, significantly reducing page load time. Selected the optimal image format based on usage scenarios, such as using WebP.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Women’s Economic Ventures',
    year: '2023',
    description: 'Formed a deep collaboration with a third-party white-label platform to design a full-stack solution for UC and nonprofit field projects',
    details: [
      'Conducted extensive data analysis on over 18,000 potential client companies, introducing new financing methods that significantly increased fund recovery rates by over 40%',
      'Developed operational reports and dashboards in Tableau, integrating interactive design elements to enhance the project\'s functionality and structure',
      'Established a white-label solution incorporating storage services, integrating front-end and back-end to create an intelligent management platform'
    ]
  }
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col gap-y-4 bg-background p-3.5 rounded-2xl mx-6 mb-8 md:col-span-12 lg:mb-4">

        <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-primaryText">Experience</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experienceData.map((exp, index) => (
            <ExperienceDetail
              key={index}
              {...exp}
              onLearnMore={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <Modal
          isOpen={activeIndex !== null}
          onClose={() => setActiveIndex(null)}
          experience={experienceData[activeIndex]}
        />

    </div>
  );
}

export default Experience;