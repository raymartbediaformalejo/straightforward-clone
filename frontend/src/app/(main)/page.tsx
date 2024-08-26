import Collection from '@/components/home/Collection'
import FeaturedCollection from '@/components/home/FeaturedCollection'
import HomeHeroSection from '@/components/home/home-hero-section'
import React from 'react'

const page = () => {
  return (
    <>
    <HomeHeroSection/>
    <Collection/>
    <FeaturedCollection/>
    </>
  )
}

export default page