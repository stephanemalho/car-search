"use client";
import { Listbox } from '@headlessui/react';
import React, { useState } from 'react'
import { updateSearchParams } from '@/utils';
import { CustomFilterProps } from '@/types';
import { useRouter } from 'next/navigation';
import FilterLists from './FilterLists';


const FilterBox = ({ title, options }: CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = ( e :  { title : string, value: string} ) => {
    const newPathName = updateSearchParams( title , e.value.toLowerCase() );
    router.push(newPathName)
  }

  return (
    <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e)
        }}
      >
        <FilterLists title={title} selected={selected} options={options} />
      </Listbox>
  )
}

export default FilterBox