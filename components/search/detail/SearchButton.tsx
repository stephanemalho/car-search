import { SearchButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const SearchButton = ({ additionalClasses }: SearchButtonProps ) => {
  

  return (
    <button
      type="submit" 
      className={`ml-3 z-10 ${additionalClasses}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  )
}

export default SearchButton