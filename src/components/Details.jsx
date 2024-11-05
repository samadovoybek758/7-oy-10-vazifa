import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../axios";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import stopMUsic from "../assets/stopMUsic.svg";
import heart from "../assets/heart.svg";
import download from "../assets/download.svg";
import nuqta from "../assets/3nuqda.svg";
import search from "../assets/search2.svg";
import clock from "../assets/clock.svg";
import like from "../assets/like.svg";

function Details() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const params = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    http
      .get(`playlists/${params.id}`)
      .then((res) => {
        // console.log(res);
        setData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id, token]);

  useEffect(() => {
    http
      .get("browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists")
      .then((response) => {
        setData2(response.data.playlists.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function playSong(audio) {
    new Audio(audio).play;
  }

  return (
    <div className="mx-auto pl-20 pr-20   datails">
      <div className="flex gap-[22px] mb-12 items-center pt-5">
        <div className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={left} alt="" />
        </div>
        <div className="bg-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={right} alt="" />
        </div>
      </div>

      {data.length > 0 &&
        data.map(function (value, index) {
          return (
            <div key={index} className="flex gap-8 max-w-[988px] mx-auto">
              <img
                className="w-[297px] h-[297px] mb-6"
                src={value.images[0]?.url}
                alt=""
              />
              <div className="mt-[61px]">
                <span className="font-medium text-base  text-white uppercase">
                  PUBLIK {value.type}
                </span>
                <h1 className="text-6xl text-white font-bold ">{value.name}</h1>
                <p className="text-white mt-6">{value.description}</p>
              </div>
            </div>
          );
        })}

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

      <div>
        {data2.length > 0 &&
          data2.map(function (value, index) {
            return (
              <div
                key={index}
                className="text-white flex justify-between max-w-[986px] py-[10px] pr-16 "
                onClick={() => {
                  playSong(value.external_urls.spotify);
                }}
              >
                <div className="flex gap-3 w-[200px]">
                  <img
                    className="w-[52px] h-[52px] mb-6"
                    src={value.images[0]?.url}
                    alt=""
                  />
                  <h1 className="ml-5">{value.name}</h1>
                </div>
                <h1 className="text-lg text-gray-500 font-medium">
                  {value.description.slice(0, 20)}
                </h1>
                <span className="w-40"></span>
                <div className="flex items-center gap-2">
                  <img src={like} alt="" />
                  <h1 className="text-xl font-medium">
                    {Math.floor(value.tracks.total / 60) +
                      ":" +
                      Math.round(
                        (value.tracks.total / 60 -
                          Math.floor(value.tracks.total / 60)) *
                          60
                      )}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Details;
