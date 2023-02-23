import React, { useState } from "react";
import DealerCard from "./DealerCard";
import logo from "../assets/hyundai.png";

function DealersList() {
  const [showAll, setShowAll] = useState(false);
  const dealers = [
    {
      logo: logo,
      title: "Hyundai",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Mercedes",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Hyundai",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Mercedes",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Hyundai",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Mercedes",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Hyundai",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Mercedes",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Hyundai",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Mercedes",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Hyundai",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
    {
      logo: logo,
      title: "Mercedes",
      name: "Ankur Hyundai",
      address:
        "D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020",
    },
  ];

  const visibleDealers = showAll ? dealers : dealers.slice(0, 8);
  return (
    <div className="mx-[14px] md:mx-[56px] mb-[37px] flex flex-col items-center">
      <div className="flex justify-between mb-[46px] w-full items-center">
        <p className=" font-semibold text-[20px]">Hyundai Dealers</p>

        {/* Filters */}

        {/* For Mobile Single Filter */}
        {/* Filter */}
        <div className="relative lg:hidden group/item">
          <button className=" flex w-[113px] sm:w-[143px] h-[45px] xl:w-[241px] px-2 xl:h-[53px] items-center justify-between border rounded-[6px]">
            <p className="w-full text-center font-semibold">Filter</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`absolute invisible group-hover/item:visible z-10 rounded-md bg-white border`}
          >
            <button className="flex hover:bg-slate-50 w-[113px] sm:w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
              <p className="text-center w-full">Open</p>
            </button>
            <button className="flex hover:bg-slate-50 w-[113px] sm:w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
              <p className="text-center w-full">Closed</p>
            </button>
          </div>
        </div>

        {/* Multiple Filters For Big Screen */}
        <div className=" hidden gap-[17px] lg:flex">
          {/* Status Filter */}
          <div className="relative group/item">
            <button className=" flex w-[193px] h-[45px] xl:w-[241px] px-2 xl:h-[53px] items-center justify-between border rounded-[6px]">
              <p className="w-full text-center font-semibold">
                Filter By Status
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`absolute invisible group-hover/item:visible z-10 rounded-md bg-white border`}
            >
              <button className="flex hover:bg-slate-50 w-[193px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Open</p>
              </button>
              <button className="flex hover:bg-slate-50 w-[193px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Closed</p>
              </button>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="relative group/item">
            <button className=" flex w-[143px] h-[45px] xl:w-[241px] px-2 xl:h-[53px] items-center justify-between border rounded-[6px]">
              <p className="w-full text-center font-semibold">Brand</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`absolute invisible group-hover/item:visible z-10 rounded-md bg-white border`}
            >
              <button className="flex hover:bg-slate-50 w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Mercedes</p>
              </button>
              <button className="flex hover:bg-slate-50 w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Hyundai</p>
              </button>
            </div>
          </div>

          {/* Location Filter */}
          <div className="relative group/item">
            <button className=" flex w-[143px] h-[45px] xl:w-[241px] px-2 xl:h-[53px] items-center justify-between border rounded-[6px]">
              <p className="w-full text-center font-semibold">Delhi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`absolute invisible group-hover/item:visible z-10 rounded-md bg-white border`}
            >
              <button className="flex hover:bg-slate-50 w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Faridabad</p>
              </button>
              <button className="flex bg-slate-50 w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Delhi</p>
              </button>
              <button className="flex hover:bg-slate-50 w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Gurugram</p>
              </button>
              <button className="flex hover:bg-slate-50 w-[143px] h-[35px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border-b">
                <p className="text-center w-full">Noida</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center ">
        {visibleDealers.map((dealer, index) => {
          return <DealerCard dealer={dealer} key={index} />;
        })}
      </div>
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
        className="capitalize mt-[57px] text-[#028DD5] flex gap-1 font-medium"
      >
        {!showAll ? "view all" : "view less"}{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default DealersList;
