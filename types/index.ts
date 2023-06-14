import { manufacturers } from './../constants/index';
import { CustomFilter } from '@/components';
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  handleClick?: 
  MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType: "button" | "submit" | "reset";
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturers: string) => void;
}