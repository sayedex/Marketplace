import React from 'react'
import Image from 'next/image'
type Props = {
    name:string,
    value:string
    type:string
}

export const Box = ({name,value,type}: Props) => {
  return (
    <div className=' bg-white border border-[#d9d9d9] dark:border-none dark:bg-gray-800 px-6 py-8 w-full rounded-lg md:min-w-max'>
{/* icon */}
<div className='flex flex-row gap-x-2 p-3'>
<Image src={`/Token/${name}.svg`} width={22} height={22} alt={name}/>
<span className='uppercase'>{name}</span>
</div>

{/* icon */}

{/* content */}
<div className='p-3'>
<h1 className='font-semibold text-2xl'>{value}</h1>
<p className='opacity-70 text-lg'>{type}</p>
</div>
{/* content */}

    </div>
  )
}

