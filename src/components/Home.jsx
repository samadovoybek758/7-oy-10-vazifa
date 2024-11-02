import React, { useState, useEffect } from "react";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import "../App.css";
import http from "../axios";

function Home() {
  const [featured, setfeatured] = useState([]);
  const [topMixes, setTopMixes] = useState([]);
  const [madeforyou, setMadeforyou] = useState([]);
  const [recent, setRecent] = useState([]);
  const [jumpBack, setJumpBack] = useState([]);
  const [uniquelly, setUniquelly] = useState([])



  
  useEffect(() => {
    http
      .get("featured-playlists")
      .then((response) => {
        setfeatured(response.data.playlists.items.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    http
      .get("categories/toplists/playlists")
      .then((response) => {
        setTopMixes(response.data.playlists.items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    http
      .get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
      .then((response) => {
        setMadeforyou(response.data.playlists.items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    http
      .get("categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
      .then((response) => {
        setRecent(response.data.playlists.items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    http
      .get("categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
      .then((response) => {
        setJumpBack(response.data.playlists.items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    http
      .get("categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
      .then((response) => {
        setUniquelly(response.data.playlists.items.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  // see all buttons

  function topseeAll(e) {
    e.preventDefault();

    http
      .get("categories/toplists/playlists")
      .then((response) => {
        setTopMixes(response.data.playlists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }


  function madeseeAll(e) {
    e.preventDefault();

    http
      .get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists")
      .then((response) => {
        setMadeforyou(response.data.playlists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }


  

  function recentlyseeAll(e) {
    e.preventDefault();

    http
      .get("categories/0JQ5DAqbMKFQ00XGBls6ym/playlists")
      .then((response) => {
        setRecent(response.data.playlists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }



  function jumpbackseeAll(e) {
    e.preventDefault();

    http
      .get("categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
      .then((response) => {
        setJumpBack(response.data.playlists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }



  function uniquellyseeAll(e) {
    e.preventDefault();

    http
      .get("categories/0JQ5DAqbMKFCbimwdOYlsl/playlists")
      .then((response) => {
        setUniquelly(response.data.playlists.items);
      })

      .catch((err) => {
        console.log(err);
      });
  }



 

  return (
    <div className="home h-[100vw] pr-[42px] pl-[42px] ">

      <div className="flex gap-[22px] items-center pt-5">
        <div className="bg-blue-950 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={left} alt="" />
        </div>
        <div className="bg-blue-950 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={right} alt="" />
        </div>
      </div>

      <h1 className="text-4xl text-white mt-[50px] mb-[29px] font-bold">
        Good afternoon
      </h1>

      <div className=" flex flex-row flex-wrap gap-8 mb-[50px] ">
        {featured.length > 0 &&
          featured.map(function (value, index) {
            return (
              <div
                key={index}
                className="flex w-[479px] bg-blue-900 gap-5 items-center"
              >
                <img
                  className="w-[82px] h-[82px]"
                  src={value.images[0]?.url}
                  alt=""
                />
                <h1 className="font-bold text-xl text-white ">{value.name}</h1>
              </div>
            );
          })}
      </div>

      <div className="mb-[50px]">
        <div className="mb-[26px] flex justify-between max-w-[990px]">
          <h1 className="text-4xl text-white mt-[50px] mb-[29px] font-bold">
            Your top mixes
          </h1>
          <button
            onClick={topseeAll}
            className="text-white py-1 px-3 hover:bg-slate-900 "
          >
            SEE ALL
          </button>
        </div>
        <div className=" flex flex-row flex-wrap gap-8 mb-[50px] ">
          {topMixes.length > 0 &&
            topMixes.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="p-5 w-[225px] bg-gray-950 rounded-md justify-center items-center"
                >
                  <img
                    className="w-[182px] h-[182px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-white ">
                    {value.name}
                  </h1>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mb-[50px]">
        <div className="mb-[26px] flex justify-between max-w-[990px]">
          <h1 className="text-4xl text-white mt-[50px] mb-[29px] font-bold">
            Made for you
          </h1>
          <button
            onClick={madeseeAll}
            className="text-white py-1 px-3 hover:bg-slate-900 "
          >
            SEE ALL
          </button>
        </div>
        <div className=" flex flex-row flex-wrap gap-8 mb-[50px] ">
          {madeforyou.length > 0 &&
            madeforyou.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="p-5 w-[225px] bg-gray-950 rounded-md justify-center items-center"
                >
                  <img
                    className="w-[182px] h-[182px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-white ">
                    {value.name}
                  </h1>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mb-[50px]">
        <div className="mb-[26px] flex justify-between max-w-[990px]">
          <h1 className="text-4xl text-white mt-[50px] mb-[29px] font-bold">
            Recently played
          </h1>
          <button
            onClick={recentlyseeAll}
            className="text-white py-1 px-3 hover:bg-slate-900 "
          >
            SEE ALL
          </button>
        </div>
        <div className=" flex flex-row flex-wrap gap-8 mb-[50px] ">
          {recent.length > 0 &&
            recent.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="p-5 w-[225px] bg-gray-950 rounded-md justify-center items-center"
                >
                  <img
                    className="w-[182px] h-[182px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-white ">
                    {value.name}
                  </h1>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mb-[50px]">
        <div className="mb-[26px] flex justify-between max-w-[990px]">
          <h1 className="text-4xl text-white mt-[50px] mb-[29px] font-bold">
          Jump back in
          </h1>
          <button
            onClick={jumpbackseeAll}
            className="text-white py-1 px-3 hover:bg-slate-900 "
          >
            SEE ALL
          </button>
        </div>
        <div className=" flex flex-row flex-wrap gap-8 mb-[50px] ">
          {jumpBack.length > 0 &&
            jumpBack.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="p-5 w-[225px] bg-gray-950 rounded-md justify-center items-center"
                >
                  <img
                    className="w-[182px] h-[182px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-white ">
                    {value.name}
                  </h1>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mb-[50px]">
        <div className="mb-[26px] flex justify-between max-w-[990px]">
          <h1 className="text-4xl text-white mt-[50px] mb-[29px] font-bold">
          Uniquely yours
          </h1>
          <button
            onClick={uniquellyseeAll}
            className="text-white py-1 px-3 hover:bg-slate-900 "
          >
            SEE ALL
          </button>
        </div>
        <div className=" flex flex-row flex-wrap gap-8 mb-[50px] ">
          {uniquelly.length > 0 &&
            uniquelly.map(function (value, index) {
              return (
                <div
                  key={index}
                  className="p-5 w-[225px] bg-gray-950 rounded-md justify-center items-center"
                >
                  <img
                    className="w-[182px] h-[182px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="font-bold text-xl text-white ">
                    {value.name}
                  </h1>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              );
            })}
        </div>
      </div>


    </div>
  );
}

export default Home;
