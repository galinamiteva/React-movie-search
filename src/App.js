import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies'
import DisplayMovies from './components/DisplayMovies'

/*
1. I SearchMovie.js ta in söksträngen från inputfältet och gör ett API-anrop mot OMDB API, spara sen svaret
   i vår redux store.
2. I DisplayMovies.js Hämta alla filmer från redux store och loopa ut. Varje film ska skickas som en prop 
   till komponenten MovieCard.js.
3. I MovieCard.js visa en film med dess egenskaper (Poster, titel etc).
*/

function App (){
  
  return(
      <div className="App">
          <h1> Movie Search</h1>
         {/*  <SearchMovies test='hej'/>  taka testwa6 PROPS */}
         <SearchMovies />
         <DisplayMovies/>
      </div>
        );
      
  }

export default App;
