import { HeaderLandingSection } from '@/components/Landing/HeaderLandingSection'
import { HeroSection } from '@/components/Landing/HeroSection'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#13111a]'>
        <HeaderLandingSection/>
        <HeroSection/>
    </div>
  )
}
export default LandingPage
