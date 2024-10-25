import React from 'react'

const MovieCard = ({poster_path,title}) => {
  return (

    <div  className=" relative mt-3 h-[40vh] w-[230px] md:w-[300px] lg:w-[210px] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-300 hover:cursor-pointer"style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
     
    <div className="absolute bottom-0 w-full bg-gray-900/60 text-white text-xl p-2 rounded-b-xl text-center">
   {title}
 </div>
   </div>
  
  )
}

export default MovieCard