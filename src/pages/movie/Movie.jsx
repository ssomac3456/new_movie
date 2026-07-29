import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { getDetail } from "../../api/movieApi";
import { ORIGINAL_URL, W500_URL } from "../../constants/imgBaseUrl";

//선택한 영화의 상세정보를 가져와서 화면에 보여주는 페이지
export default function Movie() {
  const { id } = useParams();
  //useParams"현재 주소에 있는 정보를 가져오는 함수"
  //react-router-dom 라이브러리 개발자들이 미리 만들어 놓은 함수
  //router랑 세트
  //useParams가 Router에게 지금 주소에 저장해 둔 파라미터들 좀 줘
  //지금 클릭한 영화의 id 좀 줘
  //지금 클릭한 영화의 객체안에서 id좀 꺼내줘
  const [data, setData] = useState();
  //Movie 컴포넌트가 가진 영화 상세정보 저장공간
  const [loading, setLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await getDetail(id);
        setData(detailData);
        //클릭한 객체의 주소정보를 라우터에서 id로 저장
        // >> 저장한것을 useParams로 가져옴
        // >> id의 정보를 detailData로 저장함
        // >> setData(detailData); >> setData라는 상태 변경 함수를 사용해서 data의 값을 detailData로 바꿔라.
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-white bg-black min-h-screen">
      <PageTitle title={data.title} />
      {/* 저장된 영화 상세정보 data의 객체에서 title을 꺼낸다. */}

      {/* hero */}
      <div
        className="h-[50vh] md:h-[70vh] bg-cover bg-center relative"
        style={{
          background: `url(${ORIGINAL_URL}${data?.backdrop_path}) no-repeat center / cover`,
        }} /* backdrop_path 이미지주소 */
      >
        <div className="absolute inset-0 bg-black/70"></div>
        {/* absolute inset-0 부모를 꽉채워라 */}
        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 z-10">
          <h1 className="text-2xl md:text-5xl font-bold">{data.title}</h1>
          <p className="text-sm md:text-lg opacity-80 mt-6 max-w-[700px]">
            {data.overview}
          </p>
        </div>
      </div>
      {/* content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 md:py-16 flex flex-col md:flex-row gap-10">
        {/* poster */}
        <div className="w-full md:w-[300px] shrink-0">
          {/* shrink-0 줄어들지않는다 shrink 줄어들수있다> 1*/}
          <img src={W500_URL + data.poster_path} alt={data.title} />
        </div>
        {/* info */}
        <div className="flex-1 space-y-6">
          {/* flex-1 쓰고남는공간은 내가사용할께 */}
          {/* 평점및 */}
          <div className="flex flex-wrap gap-4 text-lg xl:text-xl xl:font-semibold opacity-80">
            <span>⭐{Math.round(data.vote_average)}점</span>
            {/* Math.round()반올림하는 함수 */}
            <span>•</span>
            <span>{data.runtime}분</span>
            <span>•</span>
            <span>{data.release_date}</span>
          </div>
          {/* 장르 */}
          <ul className="flex flex-wrap gap-2 mt-12 flex-col translate-x-7">
            {data.genres.map((genre) => (
              <li key={genre.id} className="list-disc">
                {genre.name}
              </li>
            ))}
          </ul>
          {/* 줄거리 */}
          <p className="text-base md:text-md leading-relaxed opacity-80 mt-12">
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
