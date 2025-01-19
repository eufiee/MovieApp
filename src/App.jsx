import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import James from "./Practices/James";
import MovieCard from "./components/Moviecard";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

{
  /* {movienumber === 3 ? (
  <Moviecard movie={{ title: "JamesBond", release_date: "2024" }} />
) : (
  <Moviecard movie={{ title: "Not James BOND", release_date: "2024" }} />
)} */
}
{
  //   /* {movienumber === 1 && (
  //   <Moviecard movie={{ title: "JamesBond", release_date: "2024" }} />
  // )} */
}
