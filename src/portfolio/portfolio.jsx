import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioPage from './PortfolioPage';
import 'swiper/css';
import 'swiper/css/pagination';
import project1 from '@/assets/project1.png';


export default function Portfolio() {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;

  const slides = [
    { title: '01', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  images: [project1, project1, project1,project1, project1], },
    { title: '02', text: '...', images: ['...'] },
    { title: '03', text: '...', images: ['...'] },
  ];

  return (
    <div className="relative w-full h-screen bg-default text-white">
      {/* 返回按钮固定在左上角 */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-50 bg-white/10 text-white border border-white/20 px-4 py-2 rounded hover:bg-white/20 backdrop-blur transition-all"
      >
        ← Back to Home
      </button>

      {/* 主 Swiper 全屏显示 */}
      <Swiper
        direction="vertical"
        initialSlide={currentPage - 1}
        pagination={{ clickable: true }}
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
