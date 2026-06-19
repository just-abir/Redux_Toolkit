import React from "react";
import { useSelector } from "react-redux";

const Collection = () => {
  const items = useSelector((state) => state.favourite.item);

  return (
    <div>
      <div className="min-h-[calc(100vh-130px)] bg-white-300 grid grid-cols-4 gap-2">
        {items.length > 0 ? (
          items.map((item, id) => (
            <div key={id} className="border p-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-60 object-cover rounded"
              />
            </div>
          ))
        ) : (
          <p className="font-bold">No items in collection</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
