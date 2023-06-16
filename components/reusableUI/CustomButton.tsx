"use client"
import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ disabled , title, handleClick, containerStyles, btnType, textStyles, rightIcon , Icon } : CustomButtonProps ) => {
  return (
    <button 
        disabled={disabled}
        type={btnType ||'button'}
        className={`custom-btn ${containerStyles}` }
        onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && Icon }
    </button>
  )
}

export default CustomButton