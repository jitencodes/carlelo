import React from 'react'
import hyundai from '../assets/hyundai.png'
function Card({carImg}) {
  return (
    <div className='w-[324px] drop-shadow-xl bg-white px-[15px] py-[22px]'>
        <div className="flex items-center justify-between">
            <div className=" ">
            <p className='text-[#717171]'>Hyundai</p>
            <p className='text-[#000]'>Grand i10 NIOS</p>
            </div>
            <img src={hyundai} alt="" />
        </div>
        <div className='flex items-center justify-center'>
            <img src={carImg} alt="" />
        </div>
        <div className="text-center text-[#717171]">
            <p>Starting at  <span className='text-black ml-[5px]'>₹ 5,68,500</span></p>
            <p>EMI Starting at  <span className='text-black ml-[5px]'>₹ 7,975</span></p>
        </div>
        <div className="flex justify-center">
        <button className='w-[162px] h-[38px] bg-[#028DD5] rounded-[4px] text-white mt-[21px]'> Available Deals</button>
        </div>
    </div>
  )
}

export default Card