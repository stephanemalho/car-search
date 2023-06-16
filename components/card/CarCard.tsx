"use client"
import React, { useState } from "react";
import Image from "next/image";

import { calculateCarRent, convertMPGtoLitersPer100Km, generateCarImageUrl } from "@/utils";
import { CardCarProps } from "@/types";
import { CarDetails, CustomButton } from "@/components"

const CarCard = ({ car }: CardCarProps) => {

  const { city_mpg, drive, make, model, transmission, year } = car;
  const [isOpen, setIsOpen] = useState(false)
  const carRent = calculateCarRent(city_mpg, year);
  const consumption = convertMPGtoLitersPer100Km(city_mpg)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold "><span className="self-start text-[14px] font-semibold">€</span>{carRent}<span className="self-end text-[14px] font-medium">/jours</span></p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car, "angle")} alt="car model" className="object-contain" fill priority />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatique' : 'Manuelle'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">
              {drive.toLocaleLowerCase() === 'fwd' ? 'Traction' : 'Propulsion'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">
              {consumption} l/100km
            </p>
          </div>
        </div>
        <div className="car-card__btn-container" >
          <CustomButton
            title="Voir plus"
            disabled={false}
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            btnType={'button'}
            textStyles="text-white text-[14px] leading=[17px] font-bold "
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            Icon={
              <Image src="/right-arrow.svg" width={20} height={20} alt="right arrow" />
            }
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
