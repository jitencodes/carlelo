import React, { useState } from "react";
import Card from "./CarCard";
import car1 from "../assets/Cars/car1.png";
import car2 from "../assets/Cars/car2.png";
const Hyundai = [
  {
    image: car1,
    price: "₹ 5,68,500",
    emi: "₹ 6,500",
  },
  {
    image: car2,
    price: "₹ 7,68,500",
    emi: "₹ 8,500",
  },
  {
    image: car1,
    price: "₹ 5,68,500",
    emi: "₹ 6,500",
  },
  {
    image: car2,
    price: "₹ 7,68,500",
    emi: "₹ 8,500",
  },
];
const Mercedes = [
  {
    image: car2,
    price: "₹ 7,68,500",
    emi: "₹ 8,500",
  },
  {
    image: car1,
    price: "₹ 5,68,500",
    emi: "₹ 6,500",
  },
  {
    image: car2,
    price: "₹ 7,68,500",
    emi: "₹ 8,500",
  },
  {
    image: car1,
    price: "₹ 5,68,500",
    emi: "₹ 6,500",
  },
];

function CarsList() {
  const [cars, setCars] = useState("Hyundai");
  return (
    <div className="mx-[14px] md:mx-[56px] my-[37px]">
      <p className="mb-[19px]">Your Selected Brands & Models</p>
      <div className="flex justify-between mb-[24px] ">
        <div className="flex gap-[17px]">
          <button
            onClick={() => {
              setCars("Hyundai");
            }}
            className={`flex ${
              cars === "Hyundai" ? "bg-[#FF6400]" : "bg-[#fff]"
            } ${
              cars === "Hyundai" ? "text-white" : "text-[#000]"
            } px-[17px] py-[11px] rounded-md drop-shadow-lg`}
          >
            Hyundai{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="rou"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => {
              setCars("Mercedes");
            }}
            className={`flex ${
              cars === "Mercedes" ? "bg-[#FF6400]" : "bg-[#fff]"
            } ${
              cars === "Mercedes" ? "text-white" : "text-[#000]"
            }  px-[17px] py-[11px] rounded-md drop-shadow-lg`}
          >
            Mercedes{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className=" hidden md:flex">
          <button className="flex bg-[#FF6400] text-white px-[17px] py-[11px] rounded-md drop-shadow-lg">
            Chat with Experts
          </button>
        </div>
      </div>
      <div className="flex flex-col h-[425px] overflow-hidden gap  w-full ">
        {cars === "Hyundai" ? (
          <div className="flex justify-center gap-10 flex-wrap    ">
            {Hyundai.map((car, index) => {
              return <Card car={car} key={index} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center gap-10   flex-wrap    ">
            {Mercedes.map((car, index) => {
              return <Card car={car} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CarsList;
