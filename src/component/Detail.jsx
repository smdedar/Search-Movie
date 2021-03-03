import React from "react";
import CastSection from './CastSection'

const Detail = ({ movieDetail }) => {
  return (
    <div>
      <div className="container">
        <div className="columns is-centered pt-5 mt-5">
          <div className="column is-four-fifths card">
            <div className="">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="">
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={
                            "http://image.tmdb.org/t/p/w200/" +
                            movieDetail.poster_path
                          }
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <header className="card-header">
                      <p className="card-header-title is-centered">
                        {movieDetail.original_title}
                      </p>
                    </header>
                    <footer className="card-footer">
                      <p className="card-footer-item">
                        {" "}
                        <span className="material-icons">grade</span>Rating{" "}
                        {movieDetail.vote_average}
                      </p>
                      <p className="card-footer-item is-size-6">
                        <span className="is-size-7 material-icons">
                          calendar_today
                        </span>
                        {movieDetail.release_date}
                      </p>
                    </footer>
                  </div>
                </div>
                <div className="column">
                  <div className="p-5 mt-3">
                    <div className="">
                      <div className="content has-text-justified is-size-5">
                        {movieDetail.overview}
                        <br />
                        <br />
                        <div className="card">
                          <footer className="card-footer p-2">
                            <p className="card-footer-item">
                              <span className="material-icons">favorite</span>
                              Favourite
                            </p>
                            <p className="card-footer-item">
                              {" "}
                              <span className="material-icons">theaters</span>
                              Watch Trailer
                            </p>
                            <p className="card-footer-item">
                              <span className="material-icons">bookmark</span>
                              Bookmark
                            </p>
                          </footer>
                          <footer className="card-footer p-2">
                            <p className="card-footer-item">
                              <span className="material-icons">share</span>Share
                            </p>
                            <p className="card-footer-item">
                              <span className="material-icons">reviews</span>
                              Review
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CastSection movieId={movieDetail.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
