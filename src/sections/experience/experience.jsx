import React, { useState } from 'react';
import ExperienceDetail from './ExperienceDetail';
import Modal from './Modal';

const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Flyhigh Talent',
    year: 'Feb 2024 – Present',
    description: 'Led full-stack development of a cross-platform drama application and real-time health dashboard.',
    details: [
      'Led the development of a cross-platform drama application using React, TypeScript, and Next.js, ensuring a consistent user experience across web, iOS, Android, and WeChat Mini Program.',
      'Designed and implemented a serverless backend architecture using Firebase (Firestore, Authentication, Cloud Functions, Storage, and Realtime Database) to manage user authentication, script access control, and scalable content storage.',
      'Utilized Next.js SSR (Server-Side Rendering) and ISR (Incremental Static Regeneration) to improve SEO, content discoverability, and page load speed, optimizing the browsing experience for users.',
      'Developed and optimized Low Energy Bluetooth (BLE) connectivity on the Android platform using Kotlin, supporting simultaneous connections with multiple medical devices and enabling efficient Bluetooth scanning, pairing, and data synchronization.',
      'Designed and built a real-time data visualization dashboard using SVG and React Native for dynamic analysis and display of health data as part of the Securra Health project.'
    ]
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Airclub Software',
    year: 'Sep 2023 – Feb 2024',
    description: 'Built and maintained a membership application with a clear front-end/back-end separation.',
    details: [
      'Developed a membership application with front-end and back-end separation functionality, establishing partnerships with multiple gyms.',
      'Collaborated with the visual design team using Figma to implement responsive and mobile-first UI/UX best practices.',
      'Implemented JWT authentication for secure user access.',
      'Refactored large components into smaller, reusable modules, reducing rendering overhead by 15%, while ensuring cross-browser compatibility through progressive enhancement techniques.'
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