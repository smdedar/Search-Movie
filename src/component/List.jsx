import React from 'react'

const List = ({movie}) => {
    return (
        <div className="column is-3">
            <div >
            <div className="card card-header-shadow">
                <div className="card-image">
                    <figure className="image is-100x100">
                        <img src={"http://image.tmdb.org/t/p/w400//"+movie.poster_path} alt="Placeholder image" />
                    </figure>
                </div>
                <header className="card-header">
                    <p className="card-header-title is-centered">{movie.title}</p>
                </header>
                <footer className="card-footer">
                    <p className="card-footer-item is-size-6"><span className="is-size-7 material-icons">
                                        grade
                                        </span>{movie.vote_average}</p>
                    <p className="card-footer-item is-size-6"><span className="is-size-7 material-icons">
                                        calendar_today
                                        </span>{movie.release_date}</p>
                </footer>
            </div>
        </div>
        </div>
    )
}

export default List
