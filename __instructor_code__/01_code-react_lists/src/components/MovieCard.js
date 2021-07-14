import React from 'react'


export default function MovieCard(){
    return(
        <div className="MovieCard" key={idx}>
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.IMDBRating}</p>
        </div>
    )
}
