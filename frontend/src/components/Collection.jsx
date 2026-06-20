import { clearfavourite, removefavourite } from "@/redux/Features/favourite";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const Collection = () => {
  const items = useSelector((state) => state.favourite.item);
  const dispatch = useDispatch();
  const removeAll = () => {
    console.log("hi");
    dispatch(clearfavourite());
    toast.success("Cleared all favorites!");
  };

  const removeBtn = (e) => {
    dispatch(removefavourite(e));
    toast.error("Removed from Favorites! 🗑️");
    console.log("hi");
  };

  return (
    <div className="min-h-[calc(100vh-130px)] bg-white-300">
      <div className="flex justify-end">
        <button className="bg-red-500 p-3 mb-1" onClick={removeAll}>
          Remove ALL
        </button>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-4 gap-2">
          {items.map((item, id) => (
            <div key={id} className="border p-4 relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-60 object-cover rounded"
              />

              <button
                onClick={() => removeBtn(item.id)}
                className="absolute bottom-6 right-6 bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="font-bold text-xl">No items in collection</p>
        </div>
      )}
    </div>
  );
};

export default Collection;
