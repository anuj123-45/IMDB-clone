import React, {useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination';
import axios from 'axios';

const Movies = () => {

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
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c8a48e1ec8f512f3108864d32ed7f8a7&language=en-US&page=${pageNo}`).then((res)=>{
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
            return <MovieCard poster_path={movie.poster_path} title={movie.title}/>
          })
        }

  
      </div>
      <Pagination prev={handlePrev} next={handleNext} no={pageNo}/>
    </div>
  )
}

export default Movies