import React from "react";

const List = ({ movie }) => {
  return (
    <div className="column is-3">
      <div>
        <div className="card card-header-shadow">
          <div className="card-image">
            <figure className="image is-100x100">
              <img
                src={"http://image.tmdb.org/t/p/w400//" + movie.poster_path}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <header className="card-header">
            <p className="card-header-title is-centered">{movie.title}</p>
          </header>
          <footer className="card-footer">
            <p className="card-footer-item is-size-6">
              <span className="is-size-7 material-icons">grade</span>
              {movie.vote_average}
            </p>
            <a href={"moviedetail/" + movie.id} className="card-footer-item is-size-6" >
              <span class="is-size-7 material-icons">details</span>More
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default List;
