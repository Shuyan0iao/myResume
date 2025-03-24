import { useNavigate, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PortfolioPage from './PortfolioPage';

import 'swiper/css';
import 'swiper/css/navigation';
import 'boxicons/css/boxicons.min.css';

import project1_1 from '@/assets/project1/1.jpg';
import project1_2 from '@/assets/project1/2.jpg';
import project1_3 from '@/assets/project1/3.jpg';
import project1_4 from '@/assets/project1/4.jpg';
import project1_5 from '@/assets/project1/5.jpg';
import project1_6 from '@/assets/project1/6.jpg';
import project1_7 from '@/assets/project1/7.jpg';

import project2_1 from '@/assets/project2/1.png';
import project2_2 from '@/assets/project2/2.png';
import project2_3 from '@/assets/project2/3.png';
import project2_4 from '@/assets/project2/4.png';

import project3_1 from '@/assets/project3/1.png';
import project3_2 from '@/assets/project3/2.png';
import project3_3 from '@/assets/project3/3.png';
import project3_4 from '@/assets/project3/4.png';

import project4_1 from '@/assets/project4/1.png';
import project4_2 from '@/assets/project4/2.png';
import project4_3 from '@/assets/project4/3.png';
import project4_4 from '@/assets/project4/4.png';

export default function Portfolio() {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const [currentSlide, setCurrentSlide] = useState(currentPage - 1);
  const swiperRef = useRef(null);

  const slides = [
    {
      ind: '01',
      title: 'Securra Health',
      text: 'At Securra Health, I developed robust BLE connectivity for Android using Kotlin, enabling simultaneous communication with multiple medical devices. I also designed a real-time SVG-based health data dashboard in React Native. The project focused on efficient data acquisition and visualization for remote health monitoring. My contributions tackled complex BLE synchronization challenges and dynamic rendering performance on mobile platforms.',
      images: [project1_1, project1_2, project1_3, project1_4, project1_5, project1_6, project1_7],
    },
    {
      ind: '02',
      title: 'Next 528',
      text: 'At Next 528, I led the end-to-end development of a cross-platform drama app for a chain of immersive game stores, covering mobile, web, and WeChat Mini Program. Built with React, TypeScript, and Next.js, the app supports both customer and staff roles. I architected a Firebase serverless backend for authentication, content control, and real-time data. Key challenges included multi-platform UI consistency, secure access management, and optimizing performance via SSR and ISR.',
      images: [project2_1, project2_2, project2_3, project2_4],
    },
    {
      ind: '03',
      title: 'AI Law',
      text: 'At AILaw, I participated in developing an AI-powered immigration law platform tailored for legal professionals. I implemented responsive frontend components using Vue 2.0, ensuring high fidelity to UX/UI mockups. Additionally, I built a Python-based web scraper to automate the collection and processing of official government scheduling data, enhancing workflow efficiency and reducing manual input.',
      images: [project3_1, project3_2, project3_3, project3_4],
    },
    {
      ind: '04',
      title: 'AirClub Software',
      text: 'At Airclub Software, I contributed to building a B2B gym management platform by developing a cross-platform membership application with separated frontend/backend architecture. I implemented responsive, mobile-first UI with Figma collaboration, integrated JWT-based authentication, and refactored large components for better performance. The platform streamlines member management, scheduling, and analytics for fitness centers, where I addressed technical challenges in modularizing logic-heavy UIs and ensuring cross-device compatibility.',
      images: [project4_1, project4_2, project4_3, project4_4],
    },
  ];

  return (
    <div className="relative w-full h-screen bg-default text-white">
      {/* 返回按钮 */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-50 bg-white/10 text-white px-4 py-2 rounded backdrop-blur hover:bg-white/20"
      >
        ← Back to Home
      </button>

      {/* 上按钮（始终渲染，用 invisible 控制） */}
      <button
        id="swiper-prev"
        className={`hidden lg:flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 z-50 text-white text-4xl bg-white/10 hover:bg-white/20 backdrop-blur rounded-full p-2 transition-transform duration-300 hover:scale-110 ${
          currentSlide === 0 ? 'invisible' : ''
        }`}
        style={{ transform: 'translate(-50%, -35vh)' }}
      >
        <i className="bx bx-chevron-up"></i>
      </button>

      {/* 下按钮（始终渲染，用 invisible 控制） */}
      <button
        id="swiper-next"
        className={`hidden lg:flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 z-50 text-white text-4xl bg-white/10 hover:bg-white/20 backdrop-blur rounded-full p-2 transition-transform duration-300 hover:scale-110 ${
          currentSlide === slides.length - 1 ? 'invisible' : ''
        }`}
        style={{ transform: 'translate(-50%, 35vh)' }}
      >
        <i className="bx bx-chevron-down"></i>
      </button>

      {/* Swiper 主体 */}
      <Swiper
        modules={[Navigation]}
        direction="vertical"
        navigation={{
          nextEl: '#swiper-next',
          prevEl: '#swiper-prev',
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={currentPage - 1}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <PortfolioPage {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
