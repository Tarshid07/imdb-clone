import React from 'react'
import imdblogo from '../assets/imdblogo.jpg'
import { Link } from 'react-router-dom';
import Movies from './Movies';
import Watchlist from './Watchlist';

function NavBar() {
  return (
    <div className='flex border space-x-20 items-centre pl-3 py-4'>
      <img className='w-14 pt-2' src={imdblogo}></img>
      <Link to='/' className='text-blue-400 pt-2'>Movies</Link>
      <Link to='watchlist' className='text-blue-400 pt-2'>WatchList</Link>
    </div>
  )
}

export default NavBar