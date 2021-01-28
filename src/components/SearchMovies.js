//importera useState-hook för att spara värdet från inputfältet i ett state
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addMovies from '../actions/addMovies';

function SearchMovies() {
    //Spara värdet från inputfältet i ett state
    const [query, setQuery] = useState('');
    //Anropa useDispatch för att kunna sedan köra dispatch med vår action
    const dispatch = useDispatch();

    async function handleClick() {
        const API_KEY = '37fe945a';
        const API_URL = 'http://www.omdbapi.com/?apikey=';

        //parametern s är för att söka mot API:et, det som query innehåller är det som API:et söker efter
        const response = await fetch(API_URL + API_KEY + `&s=${query}`);
        const data = await response.json();

        console.log(data);
        //Kalla på vår addMovies - action och skicka med filmerna från API-svaret.
        dispatch(addMovies(data.Search));
    }

    return (
        <main>
            {/* När en användare skriver i inputfältet så körs onChange och sparar värdet i vårt state med setQuery */}
            <input type="text" onChange={ (event) => setQuery(event.target.value) }></input>
            <button onClick={ handleClick }>Search</button>
        </main>
    )
}

export default SearchMovies;