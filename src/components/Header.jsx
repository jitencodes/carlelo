import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svgs/logo.svg";
import avatar from "../assets/svgs/avatar.svg";
import menuIcon from "../assets/svgs/menuIcon.svg";
import messangerMobile from "../assets/svgs/messangerMobile.svg";
import phoneMobile from "../assets/svgs/phoneMobile.svg";
const Header = () => {
  return (
    <header className="text-white bg-[#028DD5] ">
      <div className="px-[13px] sm:px-[54px] py-[14px] flex justify-between items-center">
        <div className="flex gap-[17px] items-center ">
          <Link to="/" className="sm:hidden">
            <img src={menuIcon} alt="" />
          </Link>
          <Link to="/" className="w-[88px] md:w-[158px]">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="hidden sm:flex">
          <p className="hidden xl:flex items-center mr-[14px]">
            {" "}
            About Us How It Works New Cars Loan Upcoming Cars News/Reviews
            Contact us{" "}
          </p>
          <Link to="/" className="mr-[11px]">
            <div className="flex bg-[#FF6400] w-[108px] h-[37px] rounded-full items-center justify-center">
              <img src={avatar} alt="" className="w-[16px]" />
              <span className="ml-[3px] text-[17px]">Logout</span>
            </div>{" "}
          </Link>
          <Link
            to="/"
            className="flex bg-[#FF6400] w-[40px] h-[40px] rounded-full justify-center items-center"
          >
            <img src={phoneMobile} alt="" className="w-[17px] h-[17px]" />
          </Link>
        </div>
        {/* Mobile icons */}
        <div className="flex gap-[11px] sm:hidden">
          <Link to="/" className="">
            <img src={messangerMobile} alt="" />
          </Link>
          <Link to="/" className="">
            <img src={phoneMobile} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
