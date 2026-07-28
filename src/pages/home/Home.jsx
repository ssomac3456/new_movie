import { useEffect, useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Loading from "../../components/Loading";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../api/movieApi";
import PageTitle from "../../components/PageTitle";

export default function Home() {
  const [movieData, setMovieData] = useState({});
  //movieData 영화데이터를 담는 변수
  //setMovieData 무비데이터를 바꾸는 함수가 들어있는 변수
  //movieData라는 값을 기억해둬.
  // 처음 값은 빈 객체 {}야.
  // 나중에 setMovieData로 값을 바꾸면
  // 리액트가 새 값으로 화면을 다시 그려줘.
  const [loading, setLoading] = useState(true);

  //useEffect(() => {}, []); []=>빈배열 처음한번만 실행(홈이사라졌다가 다시나타나면 다시실행)
  //useEffect 어떤 작업을 언제 실행할지 react에게 알려주는 함수
  useEffect(() => {
    (async () => {
      //async를 붙이면 이 함수 안에서 await를 사용할 수 있다.
      //비동기> 결과가 바로 나오지 않는 작업 await 작업이 끝날때까지 기다리는 문법
      //네트워크로 데이터를 주고받을 때 자주 쓰는 문법
      try {
        const [nowPlaying, popular, topRated, upComing] = await Promise.all([
          // 네 가지 영화 데이터 요청을 동시에 실행한다.
          // 요청이 모두 끝나면 결과를 순서대로 네 변수에 저장한다.
          // Promise.all()은 여러 비동기 작업을 한꺼번에 시작하고
          // 모든 결과를 하나의 배열로 묶어준다.
          // await는 그 작업들이 모두 끝날 때까지 기다린다.
          getNowPlaying(),
          getPopular(),
          getTopRated(),
          getUpcoming(),
        ]);

        setMovieData({
          nowPlaying,
          popular,
          topRated,
          upComing,
        });
        // 영화 데이터 4개를 객체에 저장한다.
        //객체 속성 이름 nowPlaying:nowPlaying, 의 줄임 같은이름은 한번만 써도됨 (이변수가 이속성이다.)
      } catch (error) {
        console.log(error);
        //무슨오류가 났는지 콘솔에 출력
      } finally {
        setLoading(false);
        // 영화 요청이 성공하든 실패하든 마지막에 loading을 false로 바꾼다.
      }
    })();
    //(async () => {})(); 유즈이펙트안에서 await를 쓰기위해 async 함수를 하나 더 만들고, 그함수를 즉시 실행한다.
    //try 하고싶은 코드
    //catch (error) 실패했을때
    //finally 성공하든 실패하든 로딩은 끝난다.
  }, []);

  //로딩중일때는 로딩화면만 보여줘
  if (loading) {
    return <Loading />;
  }

  const nowPlayingData = movieData?.nowPlaying?.response;
  const popularData = movieData?.popular?.response;
  const topRatedData = movieData?.topRated?.response;
  const upComingData = movieData?.upComing?.response;
  console.log(movieData);
  //movieData가 있니?>있으면 nowPlaying으로 가>없으면 멈춰.
  //없으면 에러를 내지 말고 그냥 undefined를 반환해.
  //   nowPlaying = {
  //   response: {
  //     page: 1,
  //     results: [
  //       영화1,
  //       영화2,
  //       영화3
  //     ]
  //   }
  // }

  return (
    <div className="min-h-screen">
      <PageTitle title={"HOME"} />

      <Section1 data={nowPlayingData.results[1]} />

      <div className="px-5 lg:px-20 xl:px-48 py-2">
        <Section2 title={"현재상영중"} data={nowPlayingData} />
        <Section2 title={"최고평점"} data={topRatedData} />
        <Section2 title={"인기 영화"} data={popularData} />
        <Section2 title={"개봉예정"} data={upComingData} />
      </div>
    </div>
  );
}

// loading = true
//       ↓
// useEffect 실행
//       ↓
// try
//       ↓
// 영화 가져오기
//       ↓
// 성공? ──────── 아니오
//   ↓               ↓
// setMovieData      catch
//   ↓               ↓
//       finally
//           ↓
// setLoading(false)
//           ↓
// loading = false
//           ↓
// 영화 화면 출력
// 지금은 이것만 기억하면 돼.
// try → "일단 해봐."
// catch → "실패하면 여기로 와."
// finally → "성공이든 실패든 마지막에 무조건 실행."

// 이 세 개는 TMDB 때문이 아니라 JavaScript 자체의 문법이야. API뿐 아니라 파일 읽기, 데이터베이스, 네트워크 등 오류가 날 수 있는 작업에서 아주 자주 사용돼.
