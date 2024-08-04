import React from 'react'

function Movies() {
  return (
    <div>
    <div>
        <div className='text-2xl font-bold text-center pt-4 pb-4 mb-8'>
            Trending Movies
        </div>
        <div className='flex'>
            <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-2xl m-4 md:h[40vh] md:w[100px] hover:scale-110 duration-300 items-end cursor-pointer' 
            style={{ backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/422fde98670645.5ee1eef1b1ae1.jpg)`}}>
            </div>
            <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-2xl m-4 md:h[40vh] md:w[100px] hover:scale-110 duration-300 items-end cursor-pointer' 
            style={{ backgroundImage: `url(https://i.ebayimg.com/images/g/-kYAAOSwOklimr4y/s-l400.jpg)`}}>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Movies