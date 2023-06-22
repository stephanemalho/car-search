import Image from 'next/image'
import React from 'react'

const ImageHero = () => {
  return (
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain " />
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default ImageHero