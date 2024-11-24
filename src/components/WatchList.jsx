import React, { useEffect, useState } from 'react'
import genreid from '../Utility/genre'

const WatchList = ({ watchlist, setwatchList, handleRemoveFromWatchlist }) => {

  const [search, setsearch] = useState('');

  const [genreList, setgenreList] = useState(['All Genre']);

  const [currGenre, setcurrGenre] = useState('All Genre');


  const handleSearch = (e) => {
    setsearch(e.target.value)
  }

  const handleCurrGenre = (genre) => {
    setcurrGenre(genre)
  }

  // for rating 
  const sortIncrease = () => {
    let sortInc = watchlist.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average;
    });

    setwatchList([...sortInc])
  }

// for rating
  const sortDecrease = () => {
    let sortDec = watchlist.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average;
    });

    setwatchList([...sortDec])
  }


  const sortPopularityIncrease = () => {
    let sortInc = watchlist.sort((movie1, movie2) => movie1.popularity - movie2.popularity);
    setwatchList([...sortInc]);
  };
  
  // Sort by popularity in decreasing order
  const sortPopularityDecrease = () => {
    let sortDec = watchlist.sort((movie1, movie2) => movie2.popularity - movie1.popularity);
    setwatchList([...sortDec]);
  };





  useEffect(() => {
    let temp = watchlist.map((movie) => genreid[movie.genre_ids[0]]);
    let newTemp = Array.from(new Set(temp)); // Convert Set to array
    setgenreList(['All Genre', ...newTemp]); // Set the unique array to genreList
  }, [watchlist]);







  return (
    <>


      <div className='flex justify-center items-center flex-wrap mt-5 gap-3'>
        {
          genreList.map((genre) => {
            return <>  <div onClick={() => handleCurrGenre(genre)} className={currGenre == genre ? 'bg-blue-300 rounded-xl h-[3rem] w-[9rem] flex items-center justify-center cursor-pointer' : 'bg-gray-300 rounded-xl h-[3rem] w-[9rem] flex items-center justify-center cursor-pointer'}>
              {genre}
            </div></>
          })
        }

      </div>

      <div className='flex justify-center my-10'>
        <input type="text" onChange={handleSearch} className='h-[3rem] w-[17rem] bg-slate-200 outline-none px-3' placeholder='Search for movies' />
      </div>





      <div className="overflow-hidden rounded-lg border border-gray-100 m-5">
        {/* Standard Table for medium and larger screens */}
        <table className="w-full text-gray-500 hidden md:table">
          <thead className="border-b-2">
            <tr>
              <th className="p-4 text-left">Name</th>
            
              <div className='flex items-center justify-center'>
                <div onClick={sortIncrease}><i class="fa-solid fa-arrow-up cursor-pointer"></i></div>
                <th className="p-4 text-center">Rating</th>
                <div onClick={sortDecrease}><i class="fa-solid fa-arrow-down cursor-pointer"></i></div>
              </div>
              
              <th className="p-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <span>Popularity</span>
            <div onClick={sortPopularityIncrease} className="cursor-pointer">
              <i className="fa-solid fa-arrow-up"></i>
            </div>
            <div onClick={sortPopularityDecrease} className="cursor-pointer">
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </th>





              
              <th className="p-4 text-center">Genre</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movie) => {
              if (currGenre == 'All Genre') {
                return true
              }
              else {
                return genreid[movie.genre_ids[0]] == currGenre
              }
            }).filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
              .map((movie) => (
                <tr key={movie.id} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      className="h-20 w-32 bg-cover bg-center rounded-md mr-4"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <span >{movie.title}</span>
                  </td>
                  <td className="p-4 text-center">{parseFloat(movie.vote_average.toFixed(1))}</td>
                  <td className="p-4 text-center">{movie.popularity}</td>
                  <td className="p-4 text-center">{genreid[movie.genre_ids[0]]}</td>
                  <td onClick={()=>handleRemoveFromWatchlist(movie)}className="p-4 text-center text-red-500 cursor-pointer">Delete</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Two-column layout for extra-small screens */}
        <div className='text-center md:hidden font-serif'>
          <div className='flex items-center justify-center'>
            <div onClick={sortIncrease}><i class="fa-solid fa-arrow-up cursor-pointer"></i></div>
            <th className="p-4 text-center">Rating</th>
            <div onClick={sortDecrease}><i class="fa-solid fa-arrow-down cursor-pointer"></i></div>
          </div>
          <div className='flex items-center justify-center'>
            <div onClick={sortPopularityIncrease}><i class="fa-solid fa-arrow-up cursor-pointer"></i></div>
            <th className="p-4 text-center">Popularity</th>
            <div onClick={sortPopularityDecrease}><i class="fa-solid fa-arrow-down cursor-pointer"></i></div>
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          {watchlist.filter((movie) => {
            if (currGenre == 'All Genre') {
              return true
            }
            else {
              return genreid[movie.genre_ids[0]] == currGenre
            }
          }).filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
            .map((movie) => (
              <div key={movie.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-md space-y-2">
                {/* Movie Name and Image */}
                <div className="flex flex-col items-center space-y-2">
                  <img
                    className="h-20 w-32 bg-cover bg-center rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="text-center font-bold ">{movie.title}</div>
                </div>

                {/* Rating */}
                <div className="flex justify-between">
                  <span className="font-semibold">Rating:</span>
                  <span>{parseFloat(movie.vote_average.toFixed(1))}</span>
                </div>

                {/* Popularity */}
                <div className="flex justify-between">
                  <span className="font-semibold">Popularity:</span>
                  <span>{movie.popularity}</span>
                </div>

                {/* Genre */}
                <div className="flex justify-between">
                  <span className="font-semibold">Genre:</span>
                  <span>{genreid[movie.genre_ids[0]]}</span>
                </div>

                {/* Actions */}
                <div className="flex justify-between text-red-500 cursor-pointer">
                  <span className="font-semibold">Actions:</span>
                  <span onClick={()=>handleRemoveFromWatchlist(movie)}>Delete</span>
                </div>
              </div>
            ))}
        </div>
      </div>




    </>
  )
}

export default WatchList
