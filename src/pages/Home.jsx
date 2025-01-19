import MovieCard from "../components/Moviecard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John wick", release_date: "2024" },
    { id: 2, title: "Terminator", release_date: "1090" },
    { id: 3, title: "Constantine", release_date: "2001" },
    { id: 4, title: "Matrix ", release_date: "2012" },
  ];

  const handlesearch = () => {
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movie ..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
