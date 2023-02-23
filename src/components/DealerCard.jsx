import React from "react";

function DealerCard({ dealer }) {
  const { logo, title, name, address } = dealer;
  return (
    <div className="relative border w-[324px] drop-shadow-xl bg-white px-[15px] py-[22px] rounded-[8px]">
      <p className="bg-[#D9D9D9] inline-block px-[8px] py-[4px] text-[8px] font-normal rounded-full">
        Recommended
      </p>
      <div className="flex gap-[8px] absolute right-[20px] -top-[12px] stroke-black">
        <button className=" w-[67px] h-[30px] text-[11px] font-medium flex items-center gap-1 capitalize justify-center bg-white border drop-shadow-lg rounded-lg ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </span>
          Block
        </button>
        <button className=" w-[67px] h-[30px] text-[11px] font-medium flex items-center gap-1 capitalize justify-center bg-white border drop-shadow-lg rounded-lg ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
          Hotlist
        </button>
      </div>
      <div className="flex flex-row-reverse items-center mt-[17px] ">
        <div className="text-[12px] ">
          <p className="text-[#000]">{title}</p>
          <p className="text-[#028DD5]">{name}</p>
          <p className="text-[#000]">{address}</p>
        </div>
        <img src={logo} alt="" className="mr-[12px]" />
      </div>

      <div className="flex gap-[8px] ">
        <button className="w-[107px] h-[30px] bg-[#FF6400] rounded-[4px] text-[13px] text-white mt-[21px]">
          Call Dealers
        </button>
        <button className="w-[138px] h-[30px] bg-[#FF6400] rounded-[4px] text-[13px] text-white mt-[21px]">
          Chat with Dealer
        </button>
      </div>
    </div>
  );
}

export default DealerCard;
