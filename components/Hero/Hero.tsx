"use client"
import React from 'react'
import { CustomButton } from '@/components'
import ImageHero from './ImageHero'
import TitleHero from './TitleHero'

const Hero = () => {
  return (
    <div className="hero">
      <TitleHero />
      <ImageHero />
    </div>
  )
}

export default Hero