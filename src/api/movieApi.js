const baseUrl = "https://api.themoviedb.org/3/"
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
}

//========== 영화 데이터 가져오기 ==============

const fetchMovie = async (endpoint) => {
    //endpoint 함수를 fetchMovie라는 변수에 저장한다
    const url = new URL(baseUrl + endpoint);
    //url 변수는 baseurl에 endpoint(뒷주소)를 더한 변수
    //new URL은 주소를 만들기 쉽게 도와주는 자바스크립트 객체
    url.searchParams.set("languege", "ko-kr");
}