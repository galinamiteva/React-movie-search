import React from "react";

function MovieCard(props){
    console.log(props);
    return(
        <article> 
            <img className='card-image'
                src={`${props.movie.Poster}`}
                alt ={props.movie.Title +'poster'}>
            </img>
            <h3>{ props.movie.Title }</h3>
            <p>{ props.movie.Year }</p>
        </article>
    )
}

export default MovieCard;