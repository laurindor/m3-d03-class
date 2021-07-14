/*
 * Example of movie object
 *      {
      "_id": "1ae23ef2",
      "title": "Star Wars",
      "director": "George Lucas",
      "hasOscars": true,
      "IMDBRating": 8.7
    }
 */

import React from 'react'

import moviesData from '../movies-data.json'

import MovieCard from './MovieCard'

export default function MoviesList(){
    return(
        moviesData.map((movie, idx)=>{
            return(
                <MovieCard movie={movie} id={idx}/>
            )
        })
    )
}