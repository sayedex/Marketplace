import React from 'react'
import {Supply} from "../Static/Supply";
import { Swap } from '../Swap/Swap';
type Props = {
    id:string
}

export const SwapLeft = ({id}: Props) => {
  return (
    <div className='mt-[68px] pt-32 px-5 flex flex-row w-full justify-around	md:flex-1 gap-5'>
   <Supply id={id}/> 
   <Swap id={id}/>

    </div>
  )
}
