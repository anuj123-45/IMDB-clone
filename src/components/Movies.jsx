import React from 'react'
import MovieCard from './MovieCard'

const Movies = () => {
  return (
   <div className='p-5'>
    <div className='text-2xl font-bold m-5 text-center'>
      Trending Movies
    </div>
    <div className='flex flex-wrap justify-around '>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
  <MovieCard/>
    </div>
   </div>
  )
}

export default Movies
