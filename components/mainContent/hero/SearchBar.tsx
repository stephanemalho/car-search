"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {SearchButton, SearchManufacturer} from '@/components'

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("")
  const router = useRouter()

  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (manufacturer === "" && model === "") {
      alert("searching for model")
    }
    updateSearchParams(manufacturer.toLocaleLowerCase(), model.toLocaleLowerCase())
  }

  const updateSearchParams = (manufacturer : string , model: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    model && searchParams.set("model", model)
    console.log(searchParams.toString());
    
    manufacturer && searchParams.set("manufacturer", manufacturer)
    console.log(searchParams.toString());
    
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    console.log(newPathName);
    

    router.push(newPathName)
  }

  const [model, setModel] = useState("")

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton additionalClasses="sm:hidden " handleClick={() => {}}/>
      </div>
      <div className='searchbar__item'>
        <Image
          src="/model-icon.png"
          alt="model icon"
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input type="text" name="model" value={model} onChange={(e) => {setModel(e.target.value)}} placeholder="corolla" className="searchbar__input"/>
        <SearchButton additionalClasses="sm:hidden " handleClick={() => {}}/>
      </div>
      <SearchButton additionalClasses="max-sm:hidden " handleClick={() => {}}/>
    </form>
  )
}

export default SearchBar