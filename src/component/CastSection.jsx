import React from "react";
import { useState, useEffect } from "react";
import CastInfo from "./CastInfo";

const CastSection = (props) => {
  const [casts, setcasts] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.movieId}/credits?api_key=0dd443fc17bbbbadbda9d5d335630fa1&language=en-US`
    )
      .then((res) => res.json())
      .then((result) => {
        setcasts(result.cast);
      });
  });
  return (
    <div>
      <div class="columns is-multiline">
        {casts ? casts.map((cast) => <CastInfo cast={cast} />) : "Loading..."}

        {/* <pre>{JSON.stringify(casts)}</pre> */}
      </div>
    </div>
  );
};

export default CastSection;
