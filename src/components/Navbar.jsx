/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/Frame 1171276314.png";
import Cart from "../pages/Cart";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-white w-full xl:px-28 pb-4 border-[rgba(9,9,9,0.1)] xl:mt-12 md:px-14 noto-sans-regular mt-8 my-4 flex justify-between  items-center">
      <Link to={"/"} className="flex items-center ">
        <img
          src={logo}
          alt=""
          className=" w-[85.63px] h-[40.44px] xl:w-[85.63px] xl:h-[40.44px]"
        />
      </Link>

      <div className="  hidden ml-20 lg:flex md:flex md:ml-0  text-[#269255] ">
        <div className="flex justify-between  gap-10">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/"}
          >
            {" "}
            <p>Home</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2  border-white flex items-center  gap-2"
                : " flex items-center  gap-2"
            }
            to={"/user"}
          >
            {" "}
            <p>User</p>
          </NavLink>
        </div>
      </div>

      <div className="md:hidden">
        <span
          className="text-white relative xl:hidden z-40"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194235/Stage2/Vector_1_djtowv.png"
              alt=""
              className="h-7 w-9 text-3xl right-5 top-6 fixed z-30"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194235/Stage2/Vector_1_djtowv.png"
              alt=""
              className="h-7 w-9 text-3xl right-5 top-6 fixed z-30"
            />
          )}
        </span>
        {show && (
          <div className="  z-30  w-[75%] text-black border-gray-100 border-[2px]  bg-white  backdrop-blur-md   gap-7 flex flex-col barlow-condensed-regular items-start right-0 text-base  pl-5 pr-20 top-0 pt-20 h-screen absolute ">
            <NavLink className="flex items-center gap-2" to={"/"}>
              <p>Home</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/user"}>
              <p>User</p>
            </NavLink>
          </div>
        )}
      </div>
      <div className="xl:flex items-center justify-between md:flex md:mr-20 xl:mr-32   mr-20 text-[#269255] ">
        <Link to="">
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194330/Stage2/icon_y5tydn.png"
            alt=""
            className="h-12 hidden xl:flex md:flex"
          />
          </Link >
          <Link to={"/cart"} className="flex items-center ">
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194336/Stage2/Frame_14_xw45y3.png"
            alt=""
            className="h-10 flex"
          />
          </Link>
          <Link to="">
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194297/Stage2/icon_1_l87qcx.png"
            alt=""
            className="h-12  hidden xl:flex md:flex"
          />
          </Link>
          <Link>
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194428/Stage2/image_phpunj.png"
              alt=""
              className="h-8 w-8 rounded-full  hidden xl:flex md:flex pr- bg-slate-800"
            />
          </Link>
          <Link to="">
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720194411/Stage2/arrow-down-01-round_ugumy1.png"
            alt=""
            className="h-12  hidden xl:flex md:flex"
          />
          </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
