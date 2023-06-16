"use client";
import React from 'react'
import { CustomFilterProps } from '@/types';
import { FilterBox } from '@/components';

const CustomFilter = ({ selected, title, options }: CustomFilterProps) => {

  return (
    <div className="w-fit">
      <FilterBox selected={selected} title={title} options={options}/>
    </div>
  )
}

export default CustomFilter