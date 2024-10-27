import React, { useState } from 'react'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [watchlist, setwatchList] = useState([]);

  const handleAddToWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    setwatchList(newWatchList)
    console.log(newWatchList);

  }

  const handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setwatchList(filteredWatchList)
    console.log(filteredWatchList);
    
  }



  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<><Banner />  <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /></>} />
          <Route path='/watchlist' element={<WatchList watchlist={watchlist}/>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
