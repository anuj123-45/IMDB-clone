import React from 'react'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import { BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/watchlist' element={<WatchList />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
