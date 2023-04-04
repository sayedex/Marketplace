import React from 'react'
import {Supply} from "../Static/Supply";
import { Swap } from '../Swap/Swap';
type Props = {
    id:string
}

export const SwapLeft = ({id}: Props) => {
  return (
    <div className='relative overflow-y-auto overflow-x-hidden flex-1 z-10 px-5 md:items-start pb-20 	'>
   <div className='h-[112px]'></div>
   <div className='relative overflow-y-auto max-w-7xl m-auto  z-10 px-5 items-start  w-full	 flex flex-col  xl:flex-row  justify-around	md:flex-1 gap-5'>
   <Supply id={id}/> 
   <Swap id={id}/>
   </div>

    </div>
  )
}
