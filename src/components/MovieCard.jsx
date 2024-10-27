import React from 'react'

const MovieCard = ({ movie, handleAddToWatchlist, handleRemoveFromWatchlist, poster_path, title,watchlist}) => {

  function doesContain(movie) {

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }

  return (

    <div className=" relative mt-3 h-[40vh] w-[230px] md:w-[300px] lg:w-[210px] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-300 hover:cursor-pointer" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {doesContain(movie) ? (<div onClick={() => (handleRemoveFromWatchlist(movie))} className='absolute right-5 top-3 bg-gray-400 rounded'>
        &#10060;
      </div>) : (<div onClick={() => (handleAddToWatchlist(movie))} className='absolute right-5 top-3 bg-gray-400 rounded'>
        &#128525;
      </div>)}


      <div className="absolute bottom-0 w-full bg-gray-900/60 text-white text-xl p-2 rounded-b-xl text-center">
        {title}
      </div>
    </div>

  )
}

export default MovieCard