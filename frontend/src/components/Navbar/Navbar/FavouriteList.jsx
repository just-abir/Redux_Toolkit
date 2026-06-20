import React from "react";
import { Link } from "react-router-dom";

const FavouriteList = () => {
  const favouriteBtn = () => {
    console.log("hit");
  };

  return (
    <div>
      <div
        className="font-bold  px-4 h-10 bg-yellow-500 flex rounded-xl items-center"
        onClick={favouriteBtn}
      >
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  );
};

export default FavouriteList;
