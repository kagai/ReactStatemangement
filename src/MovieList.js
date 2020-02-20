import React, { useState } from "react";
import Movie from './Movie';


const MovieList = () =>{
    
    return(
        <div>{movies.map((movie)=>(
            <li>{movie.name}</li>
        ))}</div>
       
    );
}

export default MovieList;