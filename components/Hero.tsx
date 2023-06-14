"use client"
import React from 'react'
import { CustomButton } from '@/components'
import Image from 'next/image'

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Trouvez un véhibule — rapidement et facilement</h1>
        <p className="hero__subtitle">Retrouvez ici le modèle de véhicule qui vous convient le plus.</p>
        <CustomButton 
          title="Voir les véhicules"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain "/>
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  )
}

export default Hero