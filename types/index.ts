import { MouseEventHandler } from "react"

export interface customButtonProps{
title: string
containerStyles?: string
textStyles?: string
rightIcon?: string
isDisabled?: boolean
handleClick?: MouseEventHandler<HTMLButtonElement>
btnType?: 'button' | "submit"
}

export interface searchManufacturerProps{
  manufacturer: string
  setManufacturer: (manufacturer: string)=>void
}

interface OptionsProps{
  title: string
  value: string
}

export interface CustomFilterProps{
  title:string
  options: OptionsProps[]
}

export interface carProps {
  city_mpg: number
  class:string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface FilterProps{
  year: number
  modle: string

}


export interface searchParamsProps {
    model: string;
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
  
}


export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}