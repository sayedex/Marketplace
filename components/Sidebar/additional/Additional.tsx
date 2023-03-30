import React from 'react'
import { AdditionalItem } from '../social/config'
type Props = {
  close?:()=>void
}

export const Additional =({close}: Props) => {
  const handleClose = ()=>{
    close?.()
}
  return (

        <ul className='flex flex-col gap-2 pt-5 border-t border-t-gray-700'>
{AdditionalItem.map((data,index)=>{
    return <li className='' onClick={()=>handleClose()}>
        <a className='flex flex-row items-center gap-2' rel="noopener noreferrer" href="http://"><data.icon className='text-start w-[20px] text-[20px]' width={18} height={18}></data.icon>{data.name}</a>
    </li>
})}

</ul>

  )
}
