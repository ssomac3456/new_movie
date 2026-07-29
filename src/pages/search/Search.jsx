import { useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { getSearch } from "../../api/movieApi";
import PageTitle from "../../components/PageTitle";

export default function Search() {
  const [keyword, setKeyword] = useState("");
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
    <div className="min-h-screen mt-30 px-[20px]">
      <PageTitle title={"검색"} />
      {/* 검색창 */}
      <form></form>
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
