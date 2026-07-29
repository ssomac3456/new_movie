import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  //use... 이건 Hook으로 사용할 함수입니다
  const { pathname } = useLocation();
  // pathname useLocation()이 돌려주는 객체 안에 원래 있는 속성 이름
  //useLocation 현재주소정보를 알려주는 react-router-dom이 만든 함수

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return;
};
