import React from 'react'
import { Box } from '../Box/Box'
type Props = {
    id:string
}

export const Supply = ({id}: Props) => {
  return (
    <div className='flex flex-col md:w-4/6	'>

{/* 3box */}
<div className='flex flex-col  md:flex-row justify-center gap-5'>
<Box name='busd' type='ssas' value='10000'/>
<Box name='busd' type='ssas' value='10000'/>
<Box name='busd' type='ssas' value='10000'/>
</div>
{/* 3box */}

{/* big box */}
<div className='w-full flex flex-row justify-center pt-5'>
<Box name='busd' type='ssas' value='10000'/>
</div>

    </div>
  )
}

