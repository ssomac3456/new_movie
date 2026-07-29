import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/search/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        {/* :id 어떤값이 와도 이자리에 오는 값을 변수처럼 받아준다. 
        현재 주소를 확인하고 어떤 Route와 맞는지 찾고 :id 값을 기억해 둬.
        useParams랑 세트임
        :id 이 자리에 들어오는 값을 id라는 이름으로 저장해라(movie.jsx로 넘겨짐)*/}
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

// TMDB 영화 객체의 movie.id
//         ↓
// <Link to={`/movie/${movie.id}`}>
//         ↓
// 주소 /movie/550 생성
//         ↓
// <Route path="/movie/:id">
//         ↓
// Router가 { id: "550" }로 저장
//         ↓
// useParams()
//         ↓
// const { id } = useParams()
//         ↓
// id = "550"
