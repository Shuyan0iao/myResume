import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function PortfolioPage({ ind, title, text, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-8 py-16 max-w-7xl mx-auto">
        {/* 左侧文字内容 */}
        <div>
          <h1 className="text-6xl  font-bold">{ind}</h1>
          <h2 className="text-4xl text-firstColor font-extrabold mb-4">{title}</h2>
          <p className="text-gray-400 mb-4">{text}</p>
          <button className="bg-firstColor text-white px-6 py-2 rounded shadow">
            PART {ind}
          </button>
        </div>

        {/* 右侧 Swiper 图片轮播 */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                alt={`Slide ${idx}`}
                className="rounded-xl object-cover w-[300px] h-[300px] mx-auto cursor-pointer transition hover:scale-105"
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 放大图 Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
