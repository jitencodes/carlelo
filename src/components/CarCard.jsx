import React from 'react'
import hyundai from '../assets/hyundai.png'
function CarCard({car}) {
  const  {image, price, emi} = car;
  return (
    <div className='w-[324px] drop-shadow-md bg-white px-[15px] py-[22px] border rounded-[10px]'>
        <div className="flex items-center justify-between">
            <div className=" ">
            <p className='text-[#717171]'>Hyundai</p>
            <p className='text-[#000]'>Grand i10 NIOS</p>
            </div>
            <img src={hyundai} alt="" />
        </div>
        <div className='flex items-center justify-center w-[280px] h-[198px]'>
            <img src={image} alt="" />
        </div>
        <div className="text-center text-[#717171]">
            <p>Starting at  <span className='text-black ml-[5px]'>{price}</span></p>
            <p>EMI Starting at  <span className='text-black ml-[5px]'>{emi}</span></p>
        </div>
        <div className="flex justify-center">
        <div className='flex justify-center items-center cursor-pointer w-[162px] h-[38px] bg-[#028DD5] rounded-[4px] text-white mt-[21px]'> Available Deals</div>
        </div>
    </div>
  )
}

export default CarCard