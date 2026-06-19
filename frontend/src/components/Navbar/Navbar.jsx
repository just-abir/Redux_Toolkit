import React from "react";
import Logo from "./Navbar/Logo";
import SearchBar from "./Navbar/SearchBar";
import WhiteList from "./Navbar/FavouriteList";
import LowerNavbar from "./LowerNavbar";

const Navbar = () => {
  return (
    <>
      <div className="h-16 bg-gray-400 flex justify-between items-center">
        <Logo />
        <SearchBar />
        <WhiteList />
      </div>

      <LowerNavbar />
    </>
  );
};

export default Navbar;
