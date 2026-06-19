import React from "react";
import { Link } from "react-router-dom";

const FavouriteList = () => {
  const favouriteBtn = () => {
    console.log("hit");
  };

  return (
    <div>
      <div className="font-bold" onClick={favouriteBtn}>
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  );
};

export default FavouriteList;
