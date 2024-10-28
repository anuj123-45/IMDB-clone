import React, { useState } from 'react'

const WatchList = ({ watchlist, setwatchList }) => {

  const [search, setsearch] = useState('');

  const handleSearch = (e) => {
    setsearch(e.target.value)
  }
  const sortIncrease = () => {
    let sortInc=watchlist.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average;
    });
    setwatchList([...sortInc])
  }
  

  const sortDecrease = () => {
   let sortDec= watchlist.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average;
    });

    setwatchList([...sortDec])
  }
  return (
    <>


      <div className='flex justify-center items-center flex-wrap mt-5 gap-3'>
        <div className='bg-blue-300 rounded-xl h-[3rem] w-[9rem] flex items-center justify-center cursor-pointer'>
          Action
        </div>

        <div className='bg-gray-400 rounded-xl  h-[3rem] w-[9rem] flex items-center justify-center cursor-pointer'>
          Drama
        </div>
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
        <th className="p-4 text-center">Popularity</th>
        <th className="p-4 text-center">Genre</th>
        <th className="p-4 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {watchlist.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
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
            <td className="p-4 text-center">Action</td>
            <td className="p-4 text-center text-red-500 cursor-pointer">Delete</td>
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

  </div>
  <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
    {watchlist.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
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
            <span>Action</span>
          </div>

          {/* Actions */}
          <div className="flex justify-between text-red-500 cursor-pointer">
            <span className="font-semibold">Actions:</span>
            <span>Delete</span>
          </div>
        </div>
      ))}
  </div>
</div>

    


    </>
  )
}

export default WatchList
