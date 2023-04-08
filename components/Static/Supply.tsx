import React from 'react'
import { Box } from '../Box/Box';
import { formatNumber ,formatprice} from '../../utils/formatNumber';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
type Props = {
    id:string
}

export const Supply = ({id}: Props) => {
     const { rcvToken ,Feed,poolInfo} = useAppSelector((state) => state.pools);
   
  const {totalSupply,backing,tokensymbol,price}   = Feed;
  const BNBprice = poolInfo.mintToken[0]?.price ? (price/10**18)/(poolInfo.mintToken[0]?.price):0
  const  { name,symbol}  = rcvToken;
  
  return (
    <div className='flex justify-center flex-col w-full xl:w-3/6   	'>

{/* 3box */}
<div className='flex flex-col  md:flex-row justify-center gap-5'>
<Box icon={symbol} name={"USD"} type='Total Value Loked' value={`${(backing/10**18).toLocaleString()} USD`} />

<Box 
icon={tokensymbol}
name={"USD"} type='Price' 
subtitle={`${formatprice(BNBprice)} BNB`} 
value={`${(formatprice(price/10**18))} ${symbol?symbol:""}`} />
</div>
{/* 3box */}

{/* big box */}
<div className='w-full flex flex-row justify-center pt-5'>
<Box 
 icon={tokensymbol}
 bigbox={true}
 name={tokensymbol}
 subtitle={`${formatprice(BNBprice)} BNB`}
 type={`Price `} 
 value={`$${formatprice(price/10**18)} USD`} />
</div>

    </div>
  )
}

