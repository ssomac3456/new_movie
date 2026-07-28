const baseUrl = "https://api.themoviedb.org/3/";
//tmdb api 기본 주소

//======== tmdb 서버에 요청할 설정 =============
const options = {
  method: "GET",
  //서버에서 데이터를 가져오겠습니다.
  headers: {
    accept: "application/json",
    //데이터를 json형식으로 받고 싶습니다.
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    // 인증 정보를 보냅니다.
    // Bearer = "인증 토큰을 보냅니다."라는 약속된 단어
    // import.meta.env.VITE_API_KEY = .env 파일에 저장한 API 키
  },
};

//========== 영화 데이터 가져오기 ==============

const fetchMovie = async (endpoint) => {
  //baseUrl + endpoint + language=ko-KR 로 요청 주소를 만들고, 인터넷에 요청을 보낸 뒤 응답을 JSON 형태로 바꿔서 반환하는 함수
  //async 이함수는 인터넷 작업을 할 예정입니다.
  const url = new URL(baseUrl + endpoint);
  //url 변수는 baseurl에 endpoint(뒷주소)를 더한 변수
  //new URL은 주소를 만들기 쉽게 도와주는 자바스크립트 객체
  //URL url을 만들고 관리하는 도구
  //     주소
  //  ├─ 프로토콜 : https
  //  ├─ 호스트 : naver.com
  //  ├─ 경로 : /movie/popular
  //  └─ 파라미터 : language=ko-kr

  url.searchParams.set("language", "ko-kr");
  //검색 파라미터 한국어로 보내줘 언어를 한국으로 설정해

  // const response = await fetch(url, options);
  // //tmdb한테 주소에 위의 옵션변수를 넣어서 데이터 요청
  // //fetch() 브라우저가 가지고있는 함수 빌트인함수 인터넷으로 요청을 보내는 함수
  // //await 데이터받아올때까지 기다려
  // //response 변수에 tndb가 준 응답을 저장한다

  // return response.json();
  // //response 안에는 데이터가 json 형태로 들어있다.

  const response = await fetch(url, options).then((res) => res.json());
  //fetch 요청하고 응답이 오면 json으로 바꾸고 그 모든 작업이 끝날 때까지 기다렸다가 response에 저장

  return { response };
  // response를 response라는 이름의 객체로 한 번 감싸서 반환
  //프로젝트 전체에서 응답 데이터를 항상 response라는 속성으로 통일해서 사용할 수 있음.
};

//영화 리스트 요청
//movie lists

export const getNowPlaying = () => fetchMovie("movie/now_playing");
export const getPopular = () => fetchMovie("movie/popular");
export const getTopRated = () => fetchMovie("movie/top_rated");
export const getUpcoming = () => fetchMovie("movie/upcoming");

//영화 상세 요청
//movies details
export const getDetail = (movie_id) => fetchMovie(`movie/$(movie_id)`);
//함수 안에서 사용할 값이 실행할 때마다 달라진다면 그 값을 외부에서 받기 위해 매개변수를 만든다

//영화 검색
export const getSearch = (keyword) =>
  fetchMovie(`search/movie?query=${keyword}`);
//search movie
