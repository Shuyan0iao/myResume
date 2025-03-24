import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function PortfolioPage({ title, text, images }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-8 py-16 max-w-7xl mx-auto">
        {/* 左侧文字内容 */}
        <div>
          <h1 className="text-6xl font-bold">{title}</h1>
          <h2 className="text-4xl font-extrabold mb-4">POWERPOINT DESIGN</h2>
          <p className="text-gray-400 mb-4">{text}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow">
            PART {title}
          </button>
        </div>

        {/* 右侧 Swiper 图片轮播 */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
          }}
          className="rounded-xl w-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                className="rounded-xl object-cover w-[300px] h-[300px] mx-auto"
                alt={`Slide ${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
