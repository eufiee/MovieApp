import { useState } from "react";

function James(movie) {
  const [searchQuery, setSearchQuery] = useState(" ");

  const handleSearch = () => {
    alert(searchQuery);
  };

  function onLike() {
    alert("Liked!");
  }
  return (
    <div>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search something"
            className="search-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="movie">
        <h3>{movie.title}jaja</h3>
        <img src={movie.source} />
        <button onClick={onLike}>❤️</button>
      </div>
    </div>
  );
}

export default James;
