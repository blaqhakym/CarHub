"use client"

import { customButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title, textStyles, rightIcon, containerStyles, handleClick, btnType}:customButtonProps) => {
  return (
    <button type={btnType}
    disabled = {false}
    className={`custom-btn ${containerStyles} `} onClick={handleClick}
    >
<span className={`flex-1 ${textStyles}`}>{title}</span>
{rightIcon&& (
  <div className='relative w-6 h-6'>
    <Image src={rightIcon} alt='right icon' fill className='object-contain'/>
  </div>
)}
    </button>
  )
}

export default CustomButton