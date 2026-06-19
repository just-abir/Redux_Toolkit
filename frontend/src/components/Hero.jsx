import { getPhotos, getVideos } from "@/api/mediaapi";
import React, { useEffect, useState } from "react";
import {
  setQuery,
  setActiveTab,
  setResult,
  setLoading,
  setError,
} from "../redux/Features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Collection from "./Collection";
import { addfavourite } from "@/redux/Features/favourite";

const Hero = () => {
  const dispatch = useDispatch();
  const { query, activeTab, loading, error, result } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    let data = [];
    const getData = async () => {
      if (activeTab == "Photos") {
        let response = await getPhotos(query);
        console.log(response);
        data = response.map((elem) => ({
          id: elem.id,
          type: "photo",
          title: elem.alt_description,
          thumbnail: elem.urls.small,
          src: elem.urls.full,
        }));
      }

      if (activeTab == "Videos") {
        let response = await getVideos(query);
        console.log(response);
        data = response.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
          url: item.url,
        }));
      }

      if (activeTab == "gif") {
        let response = await getPhotos(query);
        data = response.map((elem) => ({
          id: elem.id,
          type: "photo",
          title: elem.alt_description,
          thumbnail: elem.urls.small,
          src: elem.urls.full,
        }));
      }

      dispatch(setResult(data));
    };

    getData();
  }, [query, activeTab]);

  const saveToFavorite = (elem) => {
    dispatch(addfavourite(elem));
  };

  return (
    <>
      <div className="min-h-[calc(100vh-130px)] bg-yellow-300 grid grid-cols-4 gap-2">
        {result.map((elem, id) => (
          <div key={id}>
            {elem.type === "photo" ? (
              <div className="relative">
                <img
                  className="w-full h-60 object-cover rounded"
                  src={elem.thumbnail}
                  alt={elem.title}
                />
                <button
                  onClick={() => saveToFavorite(elem)}
                  className="font-bold text-pink-500 bg-green-700 absolute rounded-xs px-4 py-2  bottom-1 right-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <video
                src={elem.src}
                poster={elem.thumbnail}
                controls
                className="w-full h-60 object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
