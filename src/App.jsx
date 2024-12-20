import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// axios default configurations

axios.defaults.baseURL="https://api.themoviedb.org/3/";
axios.defaults.params={}
axios.defaults.params['api_key']=import.meta.env.VITE_API_KEY;

function App() {

  const [watchlist, setwatchList] = useState([]);

  const handleAddToWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('MoviesApp', JSON.stringify(newWatchList))
    setwatchList(newWatchList)
    console.log(newWatchList);

  }

  const handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setwatchList(filteredWatchList)
    localStorage.setItem('MoviesApp', JSON.stringify(filteredWatchList));
     console.log(filteredWatchList);

  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('MoviesApp')
    if (!moviesFromLocalStorage) {
      return;
    }

    setwatchList(JSON.parse(moviesFromLocalStorage))
  }, [])

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<><Banner />  <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /></>} />
          <Route path='/watchlist' element={<WatchList watchlist={watchlist} setwatchList={setwatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
