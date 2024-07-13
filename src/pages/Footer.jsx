/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[600px] md:mt-[100px] bg-[#F6F6F6] md:pt-[150px] xl:mt-0 xl:pt-[250px]">
      <div className="relative">
        <div className=" justify-center m-6 border-[1px]  z-10   xl:w-[35%] md:w-[45%] md:h-[430px] xl:h-[550px]  md:pt-0    absolute xl:left-[800px] xl:bottom-[130px] md:left-[400px] md:bottom-[150px] left-14  bottom-[300px] bg-white border-white drop-shadow-xl  rounded-lg md:p-5 md:pb-0 p-10">
          <form className="flex flex-col drop-shadow-xl   mt-7   justify-center gap-6 md:text-[12px]">
            <div>
            <input type="text" className="border-[1px] w-full  xl:w-full border-[#0A142F] rounded-lg p-4 xl:p-4 md:p-3 "  placeholder="Name" name="FullName" required />
            </div>
            <div>
            <input type="text" className="border-[1px] w-full border-[#0A142F] rounded-lg p-4 md:p-3 xl:p-4" placeholder="Email Address" name="FullName" required />
            </div>
            <div>
            <input type="text" className="border-[1px] w-full border-[#0A142F] rounded-lg p-4 md:p-3 xl:p-4"  placeholder="Phone No" name="FullName" required />
            </div>
            <div>
            <input type="text" className="border-[1px] w-full border-[#0A142F] rounded-lg p-4 pb-40 md:pb-20 xl:pb-40 md:p-3"  placeholder="Message" name="FullName" required />
            </div>
            <button className=" text-white flex justify-start border-[1px] p-2 bg-gradient-to-br from-[#269255] xl:w-32  to-[#2D4C74]  mr-40 md:mr-56  rounded-lg " type="submit">Send Message</button>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720461863/Stage2/Rectangle_339_rtrh6w.png"
          className="md:hidden"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/demmasgzp/image/upload/v1720461863/Stage2/Rectangle_340_1_x1zkof.png"
          className="hidden  xl:h-[605px] xl:w-[1457px] justify-center md:w-[762.76px] md:h-[500.4px] xl:ml-14 md:ml-10   md:flex"
          alt=""
        />
        <div>
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720459243/Stage2/Group_wvzil6.png"
            className="h-[252px] bottom-[220px] xl:h-[450px] xl:bottom-[180px] xl:w-[450px] xl:left-[600px] md:h-[350px] md:w-[350px] md:bottom-[180px] md:left-[250px] z-0 left-[210px] w-[303px] absolute "
            alt=""
          />
          <img
            src="https://res.cloudinary.com/demmasgzp/image/upload/v1720459243/Stage2/Group_wvzil6.png"
            className="h-[252px] bottom-[180px] left-[350px]  xl:h-[400px] xl:bottom-[100px] xl:w-[400px] xl:left-[850px] md:h-[300px] md:w-[300px] md:bottom-[140px] md:left-[500px]  w-[303px] absolute "
            alt=""
          />
        </div>
        <div className="flex xl:w-[41%] xl:left-28 xl:bottom-48 text-white left-6 w-[70%]  md:w-[48%] md:left-[70px] bottom-14 gap-2   absolute md:bottom-20 flex-col">
          <h1 className="noto-sans-bold text-[24px] xl:text-[40px]">Contact Us</h1>
          <p className="text-[14px] xl:text-[25.2px] 0">
            If you would like additional details or further information, please
            don't hesitate to reach out to us. Our team is always here to assist
            you with any questions or concerns you may have.{" "}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between md:justify-center md:items-center md:gap-28  px-10 text-[#18191A] gap-5 items-center">
          <Link to={"/"} className="flex items-center ">
            <img
              src="https://res.cloudinary.com/demmasgzp/image/upload/v1720193867/Stage2/Frame_1171276314_cdcnx0.png"
              alt=""
              className=" w-[85.63px] h-[40.44px] xl:w-[85.63px] xl:h-[40.44px]"
            />
          </Link>
          <div className="flex md:gap-28 noto-sans-medium md:flex-row md:mb-4  mt-5 text-[16px] flex-col gap-2">
            <p>Services</p>
            <p>Partners</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center gap-6 items-center">
            <FaFacebookF className="h-[28px] w-9" />
            <AiFillInstagram className="h-[78px] w-9" />
            <FaTwitter className="h-[28px] w-9" />
            <FaYoutube className="h-[28px] w-9" />
          </div>
          <p className="text-[16px] text-[#00000099]">
            © 2024 Timbo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
