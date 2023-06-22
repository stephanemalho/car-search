import React from 'react'
import Image from "next/image";

import { convertMPGtoLitersPer100Km } from "@/utils";
import { CarSpecificityProps } from "@/types";
import { CustomButton } from "@/components"

const CarSpecificity = ({ car, openModal }: CarSpecificityProps ) => {
  const { city_mpg, drive,transmission } = car;
  const consumption = convertMPGtoLitersPer100Km(city_mpg)

  return (
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
            handleClick={openModal} 
            Icon={
              <Image src="/right-arrow.svg" width={20} height={20} alt="right arrow" />
            }
          />
        </div>
      </div>
  )
}

export default CarSpecificity