import React from 'react'
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CardCarProps } from "@/types";

const CarImage = ({ car }: CardCarProps) => {
  const { city_mpg, make, model, year } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <>
    <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold "><span className="self-start text-[14px] font-semibold">€</span>{carRent}<span className="self-end text-[14px] font-medium">/jours</span></p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car, "angle")} alt="car model" className="object-contain" fill priority />
      </div>
    </>
  )
}

export default CarImage