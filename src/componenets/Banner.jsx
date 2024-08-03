import React from 'react'

function Banner() {
  return (
    <div className='h-[18vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
    style={{backgroundImage : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVSWCaGAWiUF0P3OPwKFomwBtcc77AGc35w&s)`}}>
        <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 text-white text-center w-full'>
            Avengers
        </div>
    </div>
  )
}

export default Banner