import { useEffect, useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Loading from "../../components/Loading";

export default function Home() {
  const [movieData, setMovieData] = useState({});
  //movieData 영화데이터를 담는 변수 
  //setMovieData 무비데이터를 바꾸는 함수가 들어있는 변수
  //movieData라는 값을 기억해둬.
  // 처음 값은 빈 객체 {}야.
  // 나중에 setMovieData로 값을 바꾸면
  // 리액트가 새 값으로 화면을 다시 그려줘.
  const [loading, setLoading] = useState(true);


  useEffect();

  // 로딩중일때는 로딩화면만 보여줘
  // if (loading) {
  //   return <Loading/>
  // }

  don
  return (
    <>
      <Section1 />
      <div className="px-5 lg:px-20 xl:px-48 py-2">
        <Section2 />
      </div>
    </>
  );
}
