import React from "react";



const Movie = (props) =>{
    return(
        <div>
           <h1>{props.name}</h1>
           <h1>{props.price}</h1>
        </div>
    );
}

export default Movie;