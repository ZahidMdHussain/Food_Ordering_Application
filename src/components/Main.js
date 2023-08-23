import React, { useState, useContext, useEffect } from "react";
import Shimmer, { NoRestaurant } from "./Shimmer";
import Card from "./Card";
import { Link } from "react-router-dom";
import { filterSerachCard } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { RESTURANT_API } from "../confiq";

function Main() {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurant] = useState([]);

  // intialize useEffect

  useEffect(() => {
    getApiData();
  }, []);

  // api call functions
  async function getApiData() {
    const data = await fetch(RESTURANT_API);
    const json = await data.json();

    // api data added to data.js
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const isOnline = useOnline();
  return !isOnline ? (
    <div className="min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold m-4">🚫 No Internet</h1>
      <h2 className="text-lg font-bold m-2" data-testid="checkOnline">
        🔌It seems your internet connection lost...
      </h2>
    </div>
  ) : !allRestaurants ? null : (
    <div className="bg-[#F4F6F7] py-2 sm:p-8 mt-1">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pb-4 border-b border-[#ccc]">
        
        {/* button to filter out top restaurants */}
          <button
            className="p-2 border rounded-lg text-[#ff4057] border-[#ff4057] ml-1 font-medium hover:bg-[#60b246] hover:border-[#60b246] hover:text-white hover:cursor-pointer hover:shadow-md ease-in-out duration-300"
            data-testid="checkSearch"
            onClick={() => {
              const topRestaurants = allRestaurants.filter((res) => res.info.avgRating > 4.2 );
              setFilteredRestaurant(topRestaurants);
            }}
          >
           Filter top restaurants of day
          </button>
        <div>

          {/* Search for favourite restaurant */}
          <input
            className="lg:w-[300px] border border-[#85929E] p-2 rounded-lg focus:outline-none"
            data-testid="searchInput"
            type="text"
            placeholder="Search favourite food here.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredRestaurants = filterSerachCard(
                e.target.value,
                allRestaurants
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          />
        </div>
      </div>

      {/* restaurant body */}
      <div className="bg-white mt-4 flex justify-start items-center min-h-[500px] font-bserif shadow-lg rounded-md shadow-slate-400">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          <NoRestaurant />
        ) : (
          <div
            data-testid="resturantLists"
            className="mx-4 w-full my-4 flex justify-center items-center flex-wrap font-bserif"
          >
            {filteredRestaurants.map((each_resturant) => {
              return (
                <Link
                  className=""
                  to={"/restaurants/" + each_resturant?.info?.id}
                  key={each_resturant?.info?.id}
                >
                  <Card {...each_resturant?.info} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
