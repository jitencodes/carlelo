import React from 'react'
import hyundai from '../assets/hyundai.png'

function DealerCard() {
  return (
    <div className='relative w-[324px] drop-shadow-xl bg-white px-[15px] py-[22px] stroke-inherit stroke-slate-500'>
    <button className='bg-[#D9D9D9] w-[79px] h-[18px] text-[8px] font-normal rounded-full'>Recommended</button>
    <div className="flex gap-[8px] absolute right-[20px] -top-[12px] stroke-black">
        <button className=' w-[67px] h-[30px] text-[11px] font-medium bg-white drop-shadow-xl rounded-lg '>Block</button>
        <button className=' w-[67px] h-[30px] text-[11px] font-medium bg-white drop-shadow-xl rounded-lg '>HotList</button>
    </div>
    <div className="flex flex-row-reverse items-center mt-[17px] ">
        <div className="text-[12px] ">
        <p className='text-[#000]'>Hyundai</p>
        <p className='text-[#028DD5]'>Ankur Hyundai</p>
        <p className='text-[#000]'>D-192, Phase 1, Okhla Phase I, Okhla Industrial Estate,  New Delhi 110020</p>
        </div>
        <img src={hyundai} alt="" className='mr-[12px]' />
    </div>
    
   
    <div className="flex gap-[8px] ">
    <button className='w-[107px] h-[30px] bg-[#FF6400] rounded-[4px] text-[13px] text-white mt-[21px]'>Call Dealers</button>
    <button className='w-[138px] h-[30px] bg-[#FF6400] rounded-[4px] text-[13px] text-white mt-[21px]'>Chat with Dealer</button>
    </div>
</div>
  )
}

export default DealerCard