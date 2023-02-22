import React from 'react'
import banner from '../assets/banner.png'
import bannerMobile from '../assets/bannerMobile.png'
function Banner() {
  return (<div>
  <div className='relative'>
    <div className='flex'>
        <img src={banner} alt="Banner" className='hidden object-fit h-[280px] md:inline-block' />
        <img src={bannerMobile} alt="Banner" className='w-full md:hidden' />
    </div>
        <button className='absolute hidden left-[472px] text-[15px] font-light top-[115px] lg:inline-block h-[40px] w-[160px] bg-[#FF6400] text-white' >Chat with Experts</button>
  </div>
  </div>
  )
}

export default Banner