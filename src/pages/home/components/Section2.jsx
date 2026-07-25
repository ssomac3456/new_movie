import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Section2() {
  return (
  <section className="mb-[100px] xl:mb-[150px]">
    <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-8 font-[600]">인기영화</h2>
    <Swiper className="w-full"
     slidesPerView={5} spaceBetween={30}
     breakpoints={{
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 5.3,
        spaceBetween: 30
      }
    }}>
      <SwiperSlide>
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h3>영화제목</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div>
          <div className="w-50 h-80 bg-gray-300"></div>
          <h2>영화제목</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>);
}
