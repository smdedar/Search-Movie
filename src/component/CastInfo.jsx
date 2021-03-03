import React from "react";

const CastInfo = ({ cast }) => {
  return (
    <div className="column is-one-fifth">
      <div className="card">
        <div className="card-image">
          <img
            src={
              cast.profile_path == null
                ? "https://i.ibb.co/WvLm0Wy/default-picture-0-0.png"
                : "http://image.tmdb.org/t/p/w200/" + cast.profile_path
            }
            alt="Placeholder image"
          />
          <h4 className="">{cast.original_name}</h4>
        </div>
      </div>
    </div>
  );
};

CastInfo.defaultProps = {};

export default CastInfo;
