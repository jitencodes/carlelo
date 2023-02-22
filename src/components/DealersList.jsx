import React from 'react'
import DealerCard from './DealerCard'
function DealersList() {
  return (
    <div className='mx-[14px] md:mx-[56px] my-[37px]'>
        <div className="flex justify-between mb-[24px] ">
        <p className='mb-[19px] font-medium text-[20px]'>Hyundai Dealers</p>
                <div className="flex xl:hidden  w-[143px] h-[45px] xl:w-[241px] xl:h-[53px] items-center px-[11px] justify-between border rounded-[6px] mb-[37px]">
                    <p>Filter</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                </div>
            <div className=" gap-[17px] mb-[46px] hidden xl:flex">
                <div className="flex w-[241px] h-[53px] items-center px-[11px] justify-between border rounded-[6px]">
                    <p>Filter By Status</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                </div>
                <div className="flex w-[241px] h-[53px] items-center px-[11px] justify-between border rounded-[6px]">
                    <p>Filter By Status</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                </div>
                <div className="flex w-[241px] h-[53px] items-center px-[11px] justify-between border rounded-[6px]">
                    <p>Filter By Status</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                </div>
            </div> 
        </div>
            <div className="flex gap-[30px] flex-wrap justify-center ">
                <DealerCard />
                <DealerCard />
                <DealerCard />
                <DealerCard />
        </div>
    </div>
  )
}

export default DealersList