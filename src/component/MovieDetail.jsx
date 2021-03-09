import { useState, useEffect } from "react";
import Detail from "./Detail";

const MovieDetail = (props) => {
  const [movieDetail, setmovieDetail] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=0dd443fc17bbbbadbda9d5d335630fa1&language=en-US`
    )
      .then((res) => res.json())
      .then((result) => {
        setmovieDetail(result);
      });
  });

  return (
    <div>
      {/* <p>{movieDetail.overview}</p> */}
      <Detail movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetail;
