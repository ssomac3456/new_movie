import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { W500_URL } from "../../../constants/imgBaseUrl";

export default function Section2({ title, data }) {
  return (
    <section className="mb-[100px] xl:mb-[150px]">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-8 font-[600]">
        {title}
      </h2>
      <Swiper
        className="w-full"
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3.3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5.3,
            spaceBetween: 30,
          },
        }}
      >
        {
          //자바스크립트쓰기위해 {}
          data.results.map((movie) => (
            //.map() 배열의 각 요소를 하나씩 꺼내서 새로운 결과를 만드는 배열 메서드 영화 데이터 하나마다 SwiperSlide 하나씩 만듬
            //movie는 map()에 전달하는 콜백 함수의 매개변수(parameter
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <div className="xl:h-[400px]">
                  <img
                    className="w-full h-full object-cover"
                    src={W500_URL + movie.poster_path}
                    alt={movie.title}
                  />
                </div>
                <h3 className=" text-[14px] xl:text-[18px] mt-[15px] font-[600]">
                  {movie.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}
// Home.jsx
//    │
//    │ title과 data 전달
//    ▼
// Section2
//    │
//    ├── title → h2에 출력
//    │
//    └── data.results → 영화 배열
//                           │
//                           ▼
//                         map
//                           │
//              영화 한 편을 movie라고 부름
//                           │
//                           ├── movie.id
//                           ├── movie.poster_path
//                           └── movie.title
//                           │
//                           ▼
//                   SwiperSlide 한 개 생성
