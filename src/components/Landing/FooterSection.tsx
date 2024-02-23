import Link from 'next/link'
import React from 'react'

export const FooterSection = () => {
  return (
    <div className=" relative py-[35px]  mx-auto max-full lg:max-w-[1140px] 2xl:max-w-[1320px] px-6 hero-animate">
   <div className='grid grid-cols-2 gap-6'>
    <div>
        <span className='text-[#fff] opacity-60'>© Copyright 2014, All Rights Reserved by EUREX</span>
    </div>
    <ul className='flex items-center justify-end gap-2'>
        <li><Link href={"/m"} className='text-[#fff] opacity-60 hover:opacity-100'><span>Terms</span></Link></li>
        <div className='w-[4px] h-[4px] rounded-[100%] bg-[#fff] '></div>
        <li><Link href={"/m"} className='text-[#fff] opacity-60 hover:opacity-100'><span>Privacy Policy</span></Link></li>
    </ul>
   </div>
  </div>
  )
}
