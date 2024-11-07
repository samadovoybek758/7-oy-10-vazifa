import React from 'react';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import likes_logo from '../assets/kikes.logo.png';

function Likes() {
  return (
    <div className='mx-auto likes pl-20 pr-20 w-[100vw]'> 

      <div className="flex gap-[22px] items-center pt-5 mx-auto">
        <div className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={left} alt="" />
        </div>
        <div className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={right} alt="" />
        </div>
      </div>

      <div className='flex max-w-[988px] gap-8 items-center mx-aut~'>
        <img className='w-[297px]' src={likes_logo} alt="" />
        <div>
          <span className='text-base text-white font-medium w-6 inline-block' >PUBLIC PLAYLIST</span>
          <h1 className='text-[110px] text-white font-black'>Liked Songs</h1>
        </div>
      </div>
    </div>
  )
}

export default Likes