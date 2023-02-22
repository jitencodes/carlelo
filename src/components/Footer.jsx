import React from 'react';

const Footer = () => {
  const copyRightYear = new Date().getFullYear();
  console.log(copyRightYear)
  return <footer className="bg-[#028DD5] py-[29px] px-[15px]">
  <div className="text-white text-[20px] font-bold">
    <p className="text-[20px] font-bold mb-[21px]">Test driving your favorite car is a click away</p>
    <p className="text-[17px] font-normal">Choose a model to test drive at your convenience</p>
  </div>
  <button className='w-[158px] mt-[19px] h-[40px] text-center bg-white drop-shadow-sm'>Book A Test Drive</button>
</footer>;
};

export default Footer;
