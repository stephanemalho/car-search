import React from 'react'
import CustomButton from '../../../reusableUI/CustomButton'

const TitleHero = () => {

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title"><span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-primary-blue">Mon véhicule <br/></span>rapidement et facilement</h1>
      <p className="hero__subtitle">Retrouvez ici le modèle de véhicule qui vous convient le plus.</p>
      <CustomButton
        title="Voir les véhicules"
        disabled={false}
        handleClick={handleScroll}
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        btnType={'button'} />
    </div>
  )
}

export default TitleHero