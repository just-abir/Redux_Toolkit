import { setActiveTab } from "@/redux/Features/searchSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LowerNavbar = () => {
  const dispatch = useDispatch();

  const tabs = ["Photos", "Videos", "gif"];

  const btnHandle = (tab) => {
    dispatch(setActiveTab(tab));

    const routes = {
      Photos: "/photos",
      Videos: "/videos",
      gif: "/gif",
    };

    navigate(routes[tab]);
  };

  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        {tabs.map((elem, id) => (
          <button
            onClick={() => btnHandle(elem)}
            key={id}
            className={`${activeTab === elem ? "bg-blue-600" : "bg-green-600"} p-5  active:scale-95 border-2`}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LowerNavbar;
