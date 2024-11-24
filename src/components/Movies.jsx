import React, {useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination';
import axios from 'axios';

const Movies = ({watchlist,handleAddToWatchlist,handleRemoveFromWatchlist}) => {

const [movies, setmovies] = useState([]);
const [pageNo, setpageNo] = useState(1);

const handlePrev=()=>{
   if(pageNo===1){
    setpageNo(pageNo)
   }
   else {
    setpageNo(pageNo-1)
   }
}

const handleNext=()=>{
  setpageNo(pageNo+1)
}

  useEffect(() => {
    axios.get(`/movie/popular?language=en-US&page=${pageNo}`).then((res)=>{
     setmovies(res.data.results)   
    })
 }, [pageNo]);

  return (
    <div className='p-5'>
      <div className='text-2xl font-bold m-5 text-center'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-center items-center gap-8 '>
 
        {
          movies.map((movie)=>{
            return <MovieCard key={movie.id}  movie={movie} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} poster_path={movie.poster_path} title={movie.title} watchlist={watchlist}/>
          })
        }

  
      </div>
      <Pagination prev={handlePrev} next={handleNext} no={pageNo}/>
    </div>
  )
}

export default Movies