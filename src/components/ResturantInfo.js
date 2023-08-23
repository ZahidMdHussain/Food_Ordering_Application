import React from "react";
import { AiFillStar } from "react-icons/ai";
import { img_cdn_path } from "../confiq";

const ResturantInfo = ({ info }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center text-white bg-[#1B1B1B] p-8 rounded-md">
      <div className="md:ml-8 mt-6 md:mt-0">
        <h1 className="m-1 sm:m-3 text-xl sm:text-2xl font-semibold">
          {info?.name}
        </h1>
        <h3 className="m-1 sm:m-3 text-base sm:text-lg font-medium">
          {info?.cuisines.join(", ")}
        </h3>
        <h3 className="m-1 sm:m-3 text-base sm:text-lg">
          {info?.areaName}, {info?.city}
        </h3>
        <h4 className="m-1 sm:m-3 text-base sm:text-xl font-medium">
          {info?.costForTwoMessage}
        </h4>
        <p
          className={`flex items-center my-2 sm:my-6 mx-1 sm:mx-3 w-fit px-2 text-sm sm:text-lg font-bold ${
            +info?.avgRating >= 4 ? "bg-[#48c479]" : "bg-[#db7c38]"
          } text-white`}
        >
          <span className="align-baseline">
            <AiFillStar className="inline" />
          </span>
          <span className="align-baseline pl-1">{info?.avgRating}</span>
        </p>
      </div>
      <div className="">
        <img
          className="md:ml-4 w-[400px]"
          src={img_cdn_path + info?.cloudinaryImageId}
          alt="resturant-image"
        />
      </div>
    </div>
  );
};

export default ResturantInfo;
