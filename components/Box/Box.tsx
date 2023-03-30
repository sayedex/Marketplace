import React from 'react'
import Image from 'next/image'
type Props = {
    name:string,
    value:string
    type:string,
    subtitle?:string,
    bigbox?:boolean,
    icon?:string
}

export const Box = ({name,value,type,subtitle,bigbox,icon}: Props) => {
  return (
    <div className=' bg-white border border-[#d9d9d9] dark:border-none dark:bg-gray-800 px-6 py-8 w-full rounded-lg md:min-w-max'>
{/* icon */}
<div className='flex flex-row gap-x-2 p-3 items-center'>
<Image src={`/Token/${icon}.svg`} width={30} height={30} alt={name}/>
<span className='uppercase'>{name}</span>
</div>

{/* icon */}

{/* content */}
<div className={`${bigbox?"text-center":""} p-3`}>
<h1 className={`${bigbox?"text-3xl":""} font-semibold text-2xl`}>{value}</h1>
{subtitle && <h1 className= "font-semibold text-2xl">{subtitle}</h1>}
<p className={`opacity-80 text-lg text-[#f6c300] font-semibold`}>{type}</p>
</div>
{/* content */}

    </div>
  )
}

