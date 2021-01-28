import React from 'react';
//Denna hook hämtar data från vår redux store
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function DisplayMovies() {
    //useSelector kör en funktion för att returnera ens state
    //Store är själva instansen som vi skapar i index.js och i store ligger ens state med
    //den data vi vill ha. I detta fall våra filmer.
    const movies = useSelector((state) => { return state.movies });

    return (
        <section>
            {/* Loopa igenom movies med hjälp av map och för varje movie skapa en komponent
            MovieCard och skicka movie som en prop. Key måste vara unikt och används av React
            för att hålla kolla på alla MovieCard komponenter. */}
            { movies.map((movie) => {
                return <MovieCard movie={ movie } key={ movie.imdbID } />
            })}
        </section>
    )
}

export default DisplayMovies;