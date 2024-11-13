import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleLike } from "../store/likedSlice"; 

import SpotifyPlayer from 'react-spotify-player';
import http from "../axios";

import clock from "../assets/clock.svg";

function Details() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [audio, setAudio] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  
  const likedTracks = useSelector((state) => state.likedTracks); 

  useEffect(() => {
    http
      .get(`playlists/${params.id}`)
      .then((res) => {
        setData([res.data]);
        console.log(res.data);
        setData2(res.data.tracks.items.slice(0, 20));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const playerSize = { width: "100%", height: 80 };
  const view = "list";
  const theme = "black";

  function playSong(audio) {
    setAudio(audio);
  }

  function handleLike(track) {
    dispatch(toggleLike(track)); 
  }

  return (
    <div className="mx-auto pl-20 pr-20 datails pb-40">
      {data.length > 0 &&
        data.map((value, index) => (
          <div key={index} className="flex gap-8 max-w-[988px] mx-auto">
            <img className="w-[297px] h-[297px] mb-6" src={value.images[0]?.url} alt="" />
            <div className="mt-[61px]">
              <span className="font-medium text-base text-white uppercase">
                PUBLIK {value.type}
              </span>
              <h1 className="text-6xl text-white font-bold">{value.name}</h1>
              <p className="text-white mt-6">{value.description}</p>
            </div>
          </div>
        ))}

      <div className="mb-6 border-b border-gray-600 text-gray-400 font-medium flex justify-between text-lg mt-[30px] max-w-[986px] pt-3 pb-3 pl-6 pr-16 ">
        <h1># <span className="ml-5">TITLE</span></h1>
        <span>ALBUM</span>
        <span>DATE ADDED</span>
        <img src={clock} alt="" />
      </div>

      <div>
        {data2.length > 0 &&
          data2.map((track, index) => {
            const isLiked = likedTracks.some((t) => t.id === track.track.id); 
            return (
              <div
                key={index}
                className="text-white flex justify-between max-w-[986px] py-[10px] pr-16 cursor-pointer"
                onClick={() => playSong(track.track.external_urls.spotify)}
              >
                <div className="flex gap-3 w-[200px]">
                <img
                    className="w-[54px] h-[54px] mb-6"
                    src={track.track.album.images[2]?.url}
                    alt=""
                  />
                  <div>
                    <h1 className="ml-5">{track.track.name}</h1>
                    <h1 className="text-lg text-gray-500 font-medium">{track.track.artists[0].name}</h1>
                  </div>
                </div>
                <h1 className="text-lg text-gray-500 font-medium">{track.track.album.album_type}</h1>
                <span className="w-40"></span>
                <div className="flex items-center gap-2">
                  <button
                    className={`px-4 py-2 text-white rounded-full transition-colors ${isLiked ? "bg-blue-500" : "bg-gray-500"}`}
                    onClick={() => handleLike(track.track)}
                  >
                    {isLiked ? "Liked" : "Like"}
                  </button>
                  <h1 className="text-xl font-medium">
                    {Math.floor(track.track.duration_ms / 60000) +
                      ":" +
                      Math.round((Math.floor(track.track.duration_ms % 60000) / 1000))}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>

      <div className="fixed z-10 bottom-2 w-[988px]">
        <SpotifyPlayer uri={audio} size={playerSize} view={view} theme={theme} />
      </div>
    </div>
  );
}

export default Details;
