import React from "react";

function MovieCard({movie}){
    console.log(movie);
    return(
        <div className="card">
             <img className="card--image"
                src={`${movie.Poster}`}
                alt={movie.Title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{movie.Title}</h3>
            <p><small>imdbID: {movie.imdbID}</small></p>
            <p><small>Year: {movie.Year}</small></p>
            
            </div>
        </div>
    )
}

export default MovieCard;