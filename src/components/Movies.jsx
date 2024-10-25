import React, {useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';

const Movies = () => {

const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c8a48e1ec8f512f3108864d32ed7f8a7&language=en-US&page=1`).then((res)=>{
     setmovies(res.data.results)   
    })
 }, []);

  return (
    <div className='p-5'>
      <div className='text-2xl font-bold m-5 text-center'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-center gap-8 '>
 
        {
          movies.map((movie)=>{
            return <MovieCard poster_path={movie.poster_path} title={movie.title}/>
          })
        }

  
      </div>
    </div>
  )
}

export default Movies