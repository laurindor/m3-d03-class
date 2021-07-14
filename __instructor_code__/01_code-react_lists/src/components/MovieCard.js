import React from 'react'


export default function MovieCard(props){
    const { id, movie:{title, director, IMDBRating}} = props
    return(
        <div className="MovieCard" key={id}>
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>
        </div>
    )
}
