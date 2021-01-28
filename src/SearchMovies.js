import React, {useState, useEffect} from "react";
import DisplayMovies from "./DisplayMovies";
import MovieCard from './MovieCard';



export default function SearchMovies(){
    const apyKey='37fe945a'
   
    const [ movies, setMovies ] = useState([]);
    const [ queries, setQueries ] = useState('');

    useEffect(async (e) => {
        e.preventDefault();       

        try {
            const response = await fetch`http://www.omdbapi.com/?apikey=${apyKey}&s=${queries}`;
            const data = await response.json();

            console.log(data);
            setMovies(data);
        }catch(err){
            console.error(err);
        }
    },[])

    return(
        <div>
            <form className="form" onSubmit={setMovies}>
                {queries.map((query) => {return <DisplayMovies query={query} info={setQueries}/> } )}
            </form>
            <div className="card-list">
                {movies.map((movie, index) =>{ 
                   return <MovieCard movie={movie} key={index} />
                })}
            </div>    
        </div>
    )
}
