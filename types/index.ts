import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType: "button" | "submit" | "reset";
  textStyles?: string;
  rightIcon?: string;
  disabled?: boolean;
  Icon?: React.ReactNode;
}

export interface optionProps {
  value: string;
  title: string;
}

export interface CustomSelectProps {
  title: React.ReactNode; 
}
export interface CustomFilterProps {
  title: string;
  options: optionProps[];
  selected : CustomSelectProps;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface SearchButtonProps {
  handleClick: () => void;
  additionalClasses?: string;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CardCarProps {
  car: carProps;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit : number;
  model: string;
}

export interface ShowMoreCardsProps {
  pageNumber: number;
  isNext : boolean;
}