import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResult] = useState(null);

  function handleClick(e) {}

  function handleChange(event) {
    const latestInputValue = event.target.value;
    setInputValue(latestInputValue);

    if (latestInputValue === "") {
        setResult(null);
        return;
    };

    const searchRegex = new RegExp(latestInputValue, "i");

    const searchFilteredMovies = movies.filter((movie) => {
      const doesMatchSearch = searchRegex.test(movie.title);
      return doesMatchSearch;
    });

    setResult(searchFilteredMovies);
  }

  return (
    <div id="main">
      <form id="form">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          id="movie-input"
        ></input>
        <button id="button" onClick={handleClick}>
          Search
        </button>
      </form>
      <div id="result">
        {results &&
          results.map((movie) => <div className="movie" key={movie.id}>{movie.title}</div>)}
      </div>
    </div>
  );
};

export default App;
