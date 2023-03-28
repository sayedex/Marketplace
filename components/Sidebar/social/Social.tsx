import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { SocialItem } from './config';
type Props = {
  close?:()=>void
}

export const Social = ({close}: Props) => {
  const handleClose = ()=>{
    close?.()
}
  return (
<div className='flex flex-row items-center gap-3 mx-5 py-5 mt-0 border-t border-t-gray-700 '>

{SocialItem.map((data,indx)=>{
  return (
    <a href="http://" onClick={()=>handleClose()}>
    <data.icon key={data.name} /></a>
  )
})}
</div>
  )
}

