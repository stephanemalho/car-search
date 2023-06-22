import { CustomButton } from "@/components"
import React from 'react'

const NavDetails = () => {
  return (
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
      <h1 className=" 
        text-2xl font-bold text-gray-800 font-sans">CarSearch</h1>
      <CustomButton
        disabled={true}
        title="S'inscrire"
        btnType="button"
        containerStyles="text-gray-500 rounded-full bg-gray-300 min-w-[130px]"
      />
    </nav>
  )
}

export default NavDetails