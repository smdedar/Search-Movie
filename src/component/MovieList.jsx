import React from "react";
import List from "./List";

import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setmovies] = useState([]);

  const [search, setsearch] = useState({
    searchMovie: "star",
  });

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=0dd443fc17bbbbadbda9d5d335630fa1&language=en-US&query=" +
        search.searchMovie +
        "&page=1&include_adult=false"
    )
      .then((res) => res.json())
      .then((result) => {
        setmovies(result.results);
        console.log(result);
      });
  });

  const handleChange = (e) => {
    let value = e.target.value;

    if (value == "") {
      value = "star";
    }

    setsearch({ ...search, searchMovie: value });

    console.log(search);
  };

  return (
    <div className="container">
      <div className="columns mt-5 pt-5">
        <div className="column"></div>
        <div className="column">
          <div className="control is-loading">
            <input
              className="input"
              type="text"
              name="search"
              placeholder="Enter Movie Name Here"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="column"></div>
      </div>

      <div className="columns is-multiline">
        {movies.map((movie) => (
          <List movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
