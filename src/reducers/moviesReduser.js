let initialState = {
    movies: []
}

const movieReducer = (state= initialState, action)=>{
    switch(action.type){
        case 'ADD_MOVIES':
            return {
                movies: action.payload
            }
            default:
                return state;
    }
}

export default movieReducer;