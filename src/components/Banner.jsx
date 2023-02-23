import React from 'react'
import banner from '../assets/banner.png'
import bannerMobile from '../assets/bannerMobile.png'
function Banner() {
  return (<div>
  <div className='relative'>
    <div className='flex bg-cyan-400'>
      {/* Banner for Large screens */}
        <img src={banner} alt="Banner" className='hidden object-fit w-full md:inline-block' />
      {/* Banner for mobile devices */}
        <img src={bannerMobile} alt="Banner" className='w-full md:hidden' />
    </div>
        <button className='absolute hidden left-[32%] text-[15px] font-light top-[50%] md:inline-block h-[40px] w-[160px] bg-[#FF6400] text-white' >Chat with Experts</button>
  </div>
  </div>
  )
}

export default Banner