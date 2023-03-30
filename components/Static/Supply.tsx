import React from 'react'
import { Box } from '../Box/Box';
import { formatNumber } from '../../utils/formatNumber';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
type Props = {
    id:string
}

export const Supply = ({id}: Props) => {
     const { rcvToken ,TokenList,price,poolInfo} = useAppSelector((state) => state.pools);
     const BNBprice = poolInfo.mintToken[0]?.price && (price.price/10**18)/(poolInfo.mintToken[0]?.price);
  const {totalSupply,backing}   = price;
  console.log(rcvToken.name);
  
  return (
    <div className='flex justify-center flex-col w-full lg:w-3/6   	'>

{/* 3box */}
<div className='flex flex-col md:flex-row justify-center gap-5'>
<Box icon={price.tokensymbol} name={price.tokensymbol} type='Backing' value={formatNumber(backing/10**18)} />

<Box 
icon={price.tokensymbol}
name={price.tokensymbol} type='Price' 
subtitle={`${BNBprice?BNBprice.toFixed(5).toString():""} BNB`} 
value={`${(price.price/10**18).toFixed(3).toString()} ${rcvToken.symbol?rcvToken.symbol:""}`} />
</div>
{/* 3box */}

{/* big box */}
<div className='w-full flex flex-row justify-center pt-5'>
<Box 
 icon={price.tokensymbol}
 bigbox={true}
 name={price.tokensymbol}
 type={`${price.tokensymbol} - Price`} 
 value={`${(price.price/10**18).toFixed(5).toString()} USD`} />
</div>

    </div>
  )
}

