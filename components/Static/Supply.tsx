import React from 'react'
import { Box } from '../Box/Box';
import { formatNumber } from '../../utils/formatNumber';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
type Props = {
    id:string
}

export const Supply = ({id}: Props) => {
     const { rcvToken ,TokenList,price} = useAppSelector((state) => state.pools);
  const {totalSupply,backing}   = price;
  return (
    <div className='flex justify-center flex-col w-full lg:w-3/6   	'>

{/* 3box */}
<div className='flex flex-col md:flex-row justify-center gap-5'>
<Box name={price.tokensymbol} type='Backing' value={formatNumber(backing/10**18)} />
<Box name={price.tokensymbol} type='Supply' value={formatNumber(totalSupply/10**18)}/>
</div>
{/* 3box */}

{/* big box */}
<div className='w-full flex flex-row justify-center pt-5'>
<Box name={price.tokensymbol} type={`${price.tokensymbol} - Price`} value={formatNumber(price.price/10**18)}/>
</div>

    </div>
  )
}

