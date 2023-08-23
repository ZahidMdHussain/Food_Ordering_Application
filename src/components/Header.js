import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import userContext from "../utils/LoginContext";
import { useSelector } from "react-redux";
import { GoHome } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { FiUser, FiHelpCircle } from "react-icons/fi";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { login } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between py-4 px-6 text-slate-500 text-lg shadow-md bg-slate-100 font-sans font-medium">
      <Link to="/">
        <div className="w-36 h-12  bg-center bg-contain bg-no-repeat">
          <img data-testid="logo" className="py-1" src={logo} alt="app-logo" />
        </div>
      </Link>
      <div className="hidden md:flex items-center">
        <ul className="flex list-none">
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/about "
            >
              About
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/help"
            >
              Help
            </Link>
          </li>
          <li className="pl-2">
            <Link
              className="text-[#ff4057] px-2 rounded-sm outline-none duration-300 hover:bg-[#ff4057] hover:text-white hover:ease-in-out focus:outline-none"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          <li>
            <span
              data-testid="cart"
              className="bg-[#60b246] px-[4] text-xs font-bold text-white align-top rounded-md"
            >
              {cartItems.length}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between fixed bottom-0 left-0 z-20 bg-white w-full p-2 shadow-2xl shadow-gray-200 md:hidden border-t-4 border-green-100">
        <ul className="flex list-none w-full justify-between items-center">
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 outline-none focus:outline-none flex items-center flex-col text-base sm:text-lg"
              to="/"
            >
              <GoHome className="mr-1 text-lg" />
              <p className="text-xs"> Home </p>
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 outline-none focus:outline-none flex items-center flex-col text-base sm:text-lg"
              to="/about "
            >
              <FiUser className="mr-1 text-lg" />
              <p className="text-xs">About</p>
            </Link>
          </li>
          <li className="px-2">
            <Link
              className="text-[#ff4057] px-2 outline-none focus:outline-none flex items-center flex-col text-base sm:text-lg"
              to="/help"
            >
              <FiHelpCircle className="mr-1 text-lg" />
              <p className="text-xs">Help</p>
            </Link>
          </li>
          <li className="pl-2">
            <Link
              className="text-[#ff4057] px-2 outline-none focus:outline-none flex items-center flex-col text-base sm:text-lg"
              to="/cart"
            >
              <BsCartCheck className="mr-1 text-lg" />
              <p className="text-xs">
                Cart
                <span
                  data-testid="cart"
                  className="bg-[#60b246] mx-1 px-[2px] text-[8px] text-white rounded-md"
                >
                  {cartItems.length}
                </span>
              </p>
            </Link>
          </li>
          {/* <li>
            <span
              data-testid="cart"
              className="bg-[#60b246] px-[4] text-xs font-bold text-white align-top rounded-md"
            >
              {cartItems.length}
            </span>
          </li> */}
        </ul>
      </div>

      <div>
        {/* <h2>{login.username}</h2> */}
        {isLoggedIn ? (
          <button
            className="text-[#60b246] shadow-sm shadow-[#60b246] px-1 py-[8px] w-fit duration-300 rounded-md hover:shadow-md hover:shadow-[#60b246] hover:ease-in-out"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            {login.username.length === 0
              ? "Hi! Ghost"
              : "Hi! " + login.username.substring(0, 5)}
          </button>
        ) : (
          <Link to="/login">
            <button
              className="text-[#ff4057] shadow-sm shadow-[#ff4057] px-1 py-[8px] w-16 duration-300 rounded-md hover:shadow-md hover:shadow-[#ff4057] hover:ease-in-out"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              LogIn
              {(login.username = "")}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
