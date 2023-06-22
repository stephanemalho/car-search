"use client"
import React, { useState } from "react";

import { CardCarProps } from "@/types";
import { CarInfos, CarSpecificity, CarImage } from "@/components"

const CarCard = ({ car }: CardCarProps) => {

  const [isOpen, setIsOpen] = useState(false)
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="car-card group">
      <CarImage car={car} />
      <CarSpecificity car={car} openModal={handleOpenModal} />
      {/* not visible before clicking on "Voir plus" */}
      <CarInfos isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
