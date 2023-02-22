import React from 'react'
import Card from './Card';
import carImg from '../assets/Cars/img1.png'

function CarsList() {
  return (
    <div className='mx-[14px] md:mx-[56px] my-[37px]'>
        <p className='mb-[19px]'>Your Selected Brands & Models</p>
        <div className="flex justify-between mb-[24px] ">
            <div className="flex gap-[17px]">
                <button className="flex bg-[#FF6400] text-white px-[17px] py-[11px] rounded-md drop-shadow-lg ">Hyundai</button>
                <button className="flex bg-[#fff] px-[17px] py-[11px] rounded-md drop-shadow-lg">Mercedes</button>
            </div>
            <div className=" hidden lg:flex">
                <button className="flex bg-[#FF6400] text-white px-[17px] py-[11px] rounded-md drop-shadow-lg">Hyundai</button>
            </div> 
        </div>
        <div className="flex justify-center w-full ">
            <div className="flex gap-[30px] flex-wrap justify-center ">
                <Card carImg={carImg} />
                <Card carImg={carImg} />
                <Card carImg={carImg} />
                <Card carImg={carImg} />
            </div>
        </div>
    </div>
  )
}

export default CarsList