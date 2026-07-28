import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{`${title} | MOVIE`}</title>
    </Helmet>
  );
}
//{} jsx에서 자바스크립트를 쓰겠다.
// ${ } 백틱 문자열 안에 변수나 자바스크립트 값을 넣는다.
