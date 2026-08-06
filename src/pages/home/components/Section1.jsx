import { Link } from "react-router-dom";
import { ORIGINAL_URL } from "../../../constants/imgBaseUrl";

export default function Section1({ data }) {
  //data 홈에서 보낸 데이타
  return (
    <section
      style={{
        background: `#808080 url(${ORIGINAL_URL}${data.backdrop_path}) no-repeat center / cover`,
      }}
      //이렇게 자바스크립트 데이터에 따라 실시간으로 바뀌는 CSS 값이라서 style을 사용
      //첫번째 중괄호 jsx안에서 자바스크립트를 사용하겠다.
      //두번째 중괄호 자바스크립트 객체를 만들겠다.
      //ORIGINAL_URL(https://image.tmdb.org/t/p/original)data.backdrop_path(/abc123.jpg)
      //둘을 합치면:https://image.tmdb.org/t/p/original/abc123.jpg
      className="h-[80vh] px-5 lg: px-20 xl: px-50 relative"
    >
      <div className="absolute bottom-25 left-5 lg:left-20 xl:left-50">
        <h3 className="text-4xl lg:text-[50px] xl: text-[70px] text-white font-bold">
          {data.title}
        </h3>
        <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px] mt-4 mb-16 ">
          {data.overview
            ? data.overview.slice(0, 100) + "..."
            : "등록된 영화 설명이 없습니다."}
        </p>
        <Link
          to={`/movie/${data.id}`}
          className="px-8 py-4 
          bg-red-500 rounded-lg hover:bg-red-700 transition"
        >
          More View &rarr;
        </Link>
        {/* Link를 사용하면 페이지 전체를 새로고침하지 않고 화면을 이동 */}
      </div>
    </section>
  );
}

// TMDB 서버
//    │
//    │ 영화 데이터 반환
//    ▼
// Home.jsx
//    │
//    │ 첫 번째 영화 객체를 data라는 이름으로 전달
//    ▼
// Section_1.jsx
//    │
//    ├── data.backdrop_path → 배경 이미지
//    ├── data.title         → 영화 제목
//    ├── data.overview      → 영화 설명
//    └── data.id            → 상세 페이지 주소
