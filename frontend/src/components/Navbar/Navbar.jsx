import React from "react";
import Logo from "./Navbar/Logo";
import SearchBar from "./Navbar/SearchBar";
import WhiteList from "./Navbar/FavouriteList";
import LowerNavbar from "./LowerNavbar";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-400 px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <Logo />

          <div className="w-full md:w-1/2">
            <SearchBar />
          </div>

          <WhiteList />
        </div>
      </div>

      <LowerNavbar />
    </>
  );
};

export default Navbar;
