import React from 'react'
import {SearchButton, SearchManufacturer} from '@/components'
import { SearchManufacturerProps } from '@/types'

const ManufacturerSection = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton additionalClasses="sm:hidden " handleClick={() => {}}/>
      </div>
  )
}

export default ManufacturerSection