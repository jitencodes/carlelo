import React from 'react';

const Footer = () => {
  return <footer className="bg-[#028DD5] py-[29px] px-[14px] md:px-[56px] md:flex md:justify-between ">
  <div className="text-white text-[20px] font-bold">
    <p className="text-[20px] font-medium mb-[21px]">Test driving your favorite car is a click away</p>
    <p className="text-[17px] font-light">Choose a model to test drive at your convenience</p>
  </div>
  <button className='w-[158px] mt-[19px] h-[40px] text-center bg-white drop-shadow-2xl rounded-sm '>Book A Test Drive</button>
</footer>;
};

export default Footer;
