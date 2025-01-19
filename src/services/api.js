const API_KEY = "f39098192bddf826aefa6b0e1c133582";
const BASE_URL = "https://api.themoviedb.org/3";
//   /movie/550?api_key=f39098192bddf826aefa6b0e1c133582

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
