import React from 'react';

function DisplayMovies(query, info) {
    return(
        <>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="Emma"
                value={query} onChange={(e) => info(e.target.value)}/>
            <button className="button" type="submit">Search</button>
        </>
)}

export default DisplayMovies;