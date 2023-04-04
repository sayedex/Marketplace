import React from 'react'
import { RiArrowUpDownFill } from "react-icons/ri";
type Props = {
    handleChanebuysell:()=>void,
    isbuyorsell:boolean
}

export const Swich = ({handleChanebuysell,isbuyorsell}: Props) => {
  return (
    <div className={`flex justify-center text-white dark:text-white items-center mt-7 cursor-pointer ${isbuyorsell?"bg-green-600":"bg-red-600"} w-fit p-2 rounded-full m-auto`}>
    <RiArrowUpDownFill onClick={()=>handleChanebuysell()}/>
     </div>
  )
}

