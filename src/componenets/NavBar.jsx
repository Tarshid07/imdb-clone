import React from 'react'
import imdblogo from '../assets/imdblogo.jpg'
import { useNavigate } from 'react-router-dom';
import Watchlist from './Watchlist';


function NavBar() {
  return (
    <div className='flex border space-x-20 items-centre pl-3 py-4'>
      <img className='w-14 pt-2' src={imdblogo}></img>
      <h3 className='text-blue-400 pt-2'>Movies</h3>
      <h3 className='text-blue-400 pt-2'>WatchList</h3>
    </div>
  )
}

export default NavBar