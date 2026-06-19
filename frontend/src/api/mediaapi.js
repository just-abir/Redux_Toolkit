import axios from "axios";

const pexelKey = import.meta.env.VITE_PEXELS_KEY;
const unplashKey = import.meta.env.VITE_ACCESS_KEY;

console.log("KEY =", unplashKey);

export const getPhotos = async (query, page, per_page = 20) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${unplashKey}`,
    },
  });
  console.log("rspone", response.data.results);
  return response.data.results;
};

export const getVideos = async (query = 1, page, per_page = 10) => {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: {
      Authorization: pexelKey,
    },
  });
  console.log("rspone vide", response.data.videos);
  return response.data.videos;
};
