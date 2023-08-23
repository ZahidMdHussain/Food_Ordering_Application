import React from "react";
import { img_cdn_path } from "../confiq";
import { additem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const DishMenu = ({ item }) => {
  const dispatch = useDispatch();
  const addtoCart = (item) => {
    dispatch(additem(item));
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center m-4 lg:m-6 w-[350px] lg:w-[400px] xl:w-[420px] border rounded-md p-4 border-gray-300 hover:shadow-lg ease-in-out duration-300">
      <div className="mt-3 sm:mt-0 w-full sm:w-fit">
        <h4 className="m-1 text-sm font-bold text-black line-clamp-1">
          {item?.card?.info?.name}
        </h4>
        <h5 className="m-1 text-sm font-medium text-gray-700">
          {item?.card?.info?.category}
        </h5>
        <h6 className="m-1 text-sm font-medium text-gray-700">
          InStock - {item?.card?.info?.inStock == 1 ? "Yes" : "No"}
        </h6>
        <h6 className="m-1 text-sm font-medium text-gray-700">
          Rating -{" "}
          {item?.card?.info?.ratings?.aggregatedRating?.rating
            ? item?.card?.info?.ratings?.aggregatedRating?.rating
            : "4.1"}
        </h6>
        <h6 className="mx-1 my-2 text-base font-medium text-[#479f2c]">
          Price -{" ₹"}
          {item?.card?.info?.price / 100
            ? item?.card?.info?.price / 100
            : "402"}
        </h6>
      </div>
      <div className="flex flex-col w-full sm:w-[140px]">
        <img
          className="shadow-md shadow-slate-500"
          src={img_cdn_path + item?.card?.info?.imageId}
          alt="menu-item-img"
        />
        <button
          data-testid="addbtn"
          className="bg-[#60b246] py-2 px-4 mx-auto mt-6 sm:mt-3 text-sm text-white font-bold hover:bg-[#409f24]"
          onClick={() => addtoCart(item?.card?.info)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default DishMenu;
