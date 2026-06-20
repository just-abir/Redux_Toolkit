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
import toast from "react-hot-toast";

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
    toast.success("Added to Favorites! ❤️");
  };

  return (
    <>
      <div className="min-h-[calc(100vh-130px)] bg-yellow-300 p-2">
        {result.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {result.map((elem, id) => (
              <div key={id}>
                {elem.type === "photo" ? (
                  <div className="relative">
                    <img
                      className="w-full h-48 sm:h-56 md:h-60 object-cover rounded"
                      src={elem.thumbnail}
                      alt={elem.title}
                    />

                    <button
                      onClick={() => saveToFavorite(elem)}
                      className="absolute bottom-2 right-2 bg-green-700 text-pink-500 font-bold px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <video
                      src={elem.src}
                      poster={elem.thumbnail}
                      controls
                      className="w-full h-48 sm:h-56 md:h-60 object-cover rounded"
                    />

                    <button
                      onClick={() => saveToFavorite(elem)}
                      className="absolute top-2 right-2 bg-green-700 text-pink-500 font-bold px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-xl font-bold">No results found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
