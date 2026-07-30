import { useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { getSearch } from "../../api/movieApi";
import PageTitle from "../../components/PageTitle";
import { FileSearchCorner } from "lucide-react";
import { Link } from "react-router-dom";
import { W500_URL, NO_IMG } from "../../constants/ImgBaseUrl";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  //"" keyword를 처음 만들 때 빈 문자열로 시작해
  const [data, setData] = useState();
  useScrollTop();

  const onSubmit = async (e) => {
    e.preventDefault();
    //form 기본 동작(새로고침)을 막는다.

    if (!keyword.trim()) return;
    //검색어가 없거나, 띄어쓰기만 입력했다면 여기서 함수를 끝낸다.

    const searchData = await getSearch(keyword);
    setData(searchData.results);
  };

  return (
    <div className="min-h-screen mt-30 px-[20px] lg:px-[80px] xl:px-[200px]">
      <PageTitle title={"검색"} />
      {/* 검색창 */}
      <form onSubmit={onSubmit} className="flex justify-between gap-3 relative">
        <input
          onChange={(e) => setKeyword(e.target.value)}
          className="
        w-full px-5 py-3 bg-white/10 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition rounded-lg"
          /* focus 클릭했을 때 ring-2 Tailwind만의 기능 테두리 바깥에 빛나는 효과를 만든다. */
          type="text"
          placeholder="영화를 검색해보세요."
        />

        <div className="absolute top-[10px] right-[10px] opacity-50 stroke-1">
          <FileSearchCorner />
          {/* lucide-react라는 아이콘 라이브러리에서 가져온 리액트 컴포넌트 */}
        </div>
      </form>

      {data?.length > 0 ? (
        <div className="mt-[30px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((movie) => (
            <Link key={movie.id} to={`/movid/${movie.id}`} className="group">
              <div className="h-[300px] overflow-hidden rounded-lg">
                <img
                  src={
                    movie.poster_path ? W500_URL + movie.poster_path : NO_IMG
                  }
                  alt={movie.title}
                />
              </div>
              <h3 className="mt-2 font-semibold">{movie.title}</h3>
            </Link>
          ))}
        </div>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}
// 사용자가 검색어 입력
//         ↓
// keyword에 저장
//         ↓
// 엔터 또는 검색 버튼
//         ↓
// onSubmit 실행
//         ↓
// 새로고침 막기
//         ↓
// 검색어가 비었는지 확인
//         ↓
// TMDB에 keyword를 보내 검색
//         ↓
// searchData에 검색 결과 저장
//         ↓
// searchData.results를 data에 저장
//         ↓
// React가 다시 렌더링
//         ↓
// 검색 결과 화면 출력
