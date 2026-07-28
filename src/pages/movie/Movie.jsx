import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

export default function Movie() {
  const { id } = useParams();
  //useParams"현재 주소에 있는 정보를 가져오는 함수"
  //react-router-dom 라이브러리 개발자들이 미리 만들어 놓은 함수
  //router랑 세트
  //useParams가 Router에게 지금 주소에 저장해 둔 파라미터 좀 줘
  const [data, setData] = useState();
  const [loding, setLoding] = useState();
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await getDetail(id);
        setData(detailData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
      }
    })();
  }, [id]);

  if (loding) {
    return <Loading />;
  }

  return (
    <div>
      <PageTitle title={data.title} />
    </div>
  );
}
