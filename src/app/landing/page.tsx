import FeatureSection from '@/components/Home/FeatureSection'
import { ClientSection } from '@/components/Landing/ClientSection'
import { HeaderLandingSection } from '@/components/Landing/HeaderLandingSection'
import { HeroSection } from '@/components/Landing/HeroSection'
import { VideoSection } from '@/components/Landing/VideoSection'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#13111a]'>
        <HeaderLandingSection/>
        <HeroSection/>
        <ClientSection/>
        <VideoSection/>
        <ClientSection/>
        <FeatureSection/>

    </div>
  )
}
export default LandingPage
