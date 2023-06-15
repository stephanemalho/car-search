"use client"

import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ title, handleClick, containerStyles, btnType, textStyles, rightIcon , Icon } : CustomButtonProps ) => {
  return (
    <button 
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}` }
        onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && Icon }
    </button>
  )
}

export default CustomButton