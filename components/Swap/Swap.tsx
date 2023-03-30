import React, { useEffect } from 'react'
import { Box } from '../Box/Box';
import { SwapRoute } from './SwapRoute';
import { Tokeninfo ,GetTokenlistPrice,getTokenInfoforuser} from '../../API/Gettokeninfo';
import {fetchSubgraphData} from "../../API/Getprice"
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { Tokenlist,Allpool } from '../TokenList/Tokenlist';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import {setPoolinfo} from "../../store/poolSlice"
type Props = {
  id: string
}

export const Swap = ({ id }: Props) => {
  const {address} = useAccount()
  const dispatch = useAppdispatch();
  const router = useRouter();
  const contract = router.query.id as string;
   const { rcvToken ,TokenList,price,mintTokenBalance,SoldTokenBalance,poolInfo,BNBbalance} = useAppSelector((state) => state.pools);
  // const {totalSupply,backing}   = price;
  useEffect(() => {
    if(contract){
      const token = Allpool[contract];    
      dispatch(fetchSubgraphData(token.url));
      dispatch(setPoolinfo(token))
      dispatch(GetTokenlistPrice({data:token.mintToken}))
      // dispatch(Tokeninfo({ address: token.contractaddress }));
    }else{
      const token = Allpool["0x09eff1aeb50dc3562367d3cdc301a49459e16da9"];
      // dispatch(Tokeninfo({ address: token.contractaddress }));
      dispatch(fetchSubgraphData(token.url));
      dispatch(setPoolinfo(token));
      dispatch(GetTokenlistPrice({data:token.mintToken}))
    }


  }, [contract])


  useEffect(() => {
    dispatch(Tokeninfo({ address: "sasa" }));
  }, [price])


  useEffect(() => {
    if(address){
      dispatch(getTokenInfoforuser({ user: address}));
    }
    console.log("log bro..");
    
  }, [address,price])





  return (
    <div className='relative flex flex-col gap-5 w-full lg:w-3/6   '>
      {/* content */}
      <div className='flex flex-row gap-x-5'>
        <Box icon={poolInfo.mintToken[0]?.name} name={poolInfo.mintToken[0]?.name} value={BNBbalance?Number(BNBbalance).toFixed(1):""} type='Balance' />
        <Box icon={price.tokensymbol} name={price.tokensymbol} value={mintTokenBalance} type='Balance' />
      </div>
      {/* content */}
      <div className='relative bg-white border border-[#d9d9d9] dark:border-none dark:bg-gray-800 rounded-2xl'>
        <SwapRoute />
      </div>
    </div>
  )
}

