import { setQuery } from "@/redux/Features/searchSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const activeTab = useSelector((state) => state.search.activeTab);

  const navigate = useNavigate();
  const [searchValue, setsearchValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    setsearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log("vlaue is ", searchValue);
    dispatch(setQuery(searchValue));
    if (activeTab === "Photos") {
      navigate("/");
    } else if (activeTab === "Videos") {
      navigate("/videos");
    } else if (activeTab === "gif") {
      navigate("/gif");
    }

    setsearchValue("");
  };

  return (
    <div className="border-2 px-3 py-2 flex items-center gap-2 rounded">
      <input
        onChange={handleChange}
        value={searchValue}
        onKeyDown={handleKeyDown}
        className="flex-1 h-10 outline-none min-w-0"
        type="text"
        placeholder="Search your want"
      />

      <button
        className="bg-blue-500 text-white px-4 h-10 rounded active:scale-95"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
