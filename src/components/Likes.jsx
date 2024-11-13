import React, { useEffect, useState } from 'react';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import likes_logo from '../assets/kikes.logo.png';
import stopMUsic from "../assets/stopMusic.svg";
import heart from "../assets/heart.svg";
import download from "../assets/stopMusic.svg";
import nuqta from "../assets/3nuqda.svg";
import search from "../assets/search2.svg";
import clock from "../assets/clock.svg";
import http from '../axios';

function Likes() {
  const[data,setData] = useState([])

  useEffect(() =>{
    http
      .get("browse/categories/toplists/playlists")
      .then((response) => {
        setData(response.data.playlists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  },[])

  return (
    <div className='mx-auto likes pl-14 pr-20 w-[100vw] h-[100vw]'> 
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

      <div className="flex max-w-[988px] justify-between items-center">
        <div className="max-w-[299px] flex gap-[22px] mt-[60px] ">
          <div className="w-[72px] h-[72px] rounded-full flex justify-center items-center bg-green-600 ml-[14px]">
            <img src={stopMUsic} alt="" />
          </div>
          <img src={heart} alt="" />
          <img src={download} alt="" />
          <img src={nuqta} alt="" />
        </div>

        <div className="flex gap-8 mt-9">
          <img className="w-6 h-6" src={search} alt="" />
          <select className="text-white text-lg bg-transparent font-sans">
            <option value="Custom order">Custom order</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>

      <div className="mb-6  border-b border-gray-600 text-gray-400 font-medium flex justify-between text-lg mt-[30px] max-w-[986px] pt-3 pb-3 pl-6 pr-16 ">
        <h1>
          # <span className="ml-5">TITLE</span>
        </h1>
        <span>ALBUM</span>
        <span>DATE ADDED</span>
        <img src={clock} alt="" />
      </div>
      

      <div className=" flex flex-row flex-wrap gap-6 mb-[50px]  ">
          {data.length > 0 &&
            data.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="text-white flex justify-between max-w-[986px] py-[10px] w-[100vw] pr-16 cursor-pointer"
                >
                  <img
                    className="w-[54px] h-[54px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="ml-5 ">
                    {value.name}
                  </h1>
                  <p className="text-gray-500 mt-3">{value.description.slice(0,30) + ' ...'}</p>
                </div>
              );
            })}
        </div>

    </div>
  )
}

export default Likes