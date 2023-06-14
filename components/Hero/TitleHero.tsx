import React from 'react'
import CustomButton from '../reusableUI/CustomButton'

const TitleHero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="flex-1 pt-36 padding-x">
    <h1 className="hero__title">Votre véhicule<br/> — rapidement et facilement</h1>
    <p className="hero__subtitle">Retrouvez ici le modèle de véhicule qui vous convient le plus.</p>
    <CustomButton 
      title="Voir les véhicules"
      handleClick={handleScroll}
      containerStyles="bg-primary-blue text-white rounded-full mt-10"
    />
  </div>
  )
}

export default TitleHero