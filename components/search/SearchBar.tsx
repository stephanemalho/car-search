"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import {SearchButton,  ModelSection, ManufacturerSection} from '@/components'

const SearchBar = () => {

  const router = useRouter()
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (manufacturer === "" && model === "") {
      alert("Entrez un modèle")
    }
    updateSearchParams(manufacturer.toLocaleLowerCase(), model.toLocaleLowerCase())
  }

  const updateSearchParams = (manufacturer : string , model: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    model && searchParams.set("model", model)
    !model && searchParams.delete("model")
    manufacturer && searchParams.set("manufacturer", manufacturer)
    !manufacturer && searchParams.delete("manufacturer")
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    
    router.push(newPathName)
  }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <ManufacturerSection manufacturer={manufacturer} setManufacturer={setManufacturer}/>
      <ModelSection model={model} setModel={setModel}/>
      <SearchButton additionalClasses="max-sm:hidden " handleClick={() => {}}/>
    </form>
  )
}

export default SearchBar