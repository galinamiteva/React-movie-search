//denna actions körs ifrån en komponent när vi vill uppdatera vår store
//
const addMovies = (movies) =>{
    return {
        type: 'ADD_MOVIES',
        payload: movies
    }
    
}
export default addMovies;