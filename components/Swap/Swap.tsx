import React, { useEffect } from 'react'
import { Box } from '../Box/Box';
import { SwapRoute } from './SwapRoute';
import { Tokeninfo ,GetTokenlistPrice,getTokenInfoforuser} from '../../API/Gettokeninfo';
import {fetchSubgraphData} from "../../API/Getprice"
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { Allpool } from '../../config/Token';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import {setPoolinfo} from "../../store/poolSlice";
import { formatprice } from '../../utils/formatNumber';
type Props = {
  id: string
}

export const Swap = ({ id }: Props) => {
  const {address} = useAccount()
  const dispatch = useAppdispatch();
  const router = useRouter();
  const contract = router.query.id as string;
   const { rcvToken ,Feed,mintTokenBalance,SoldTokenBalance,poolInfo,BNBbalance} = useAppSelector((state) => state.pools);
   const {mintToken,} = poolInfo;
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
      dispatch(fetchSubgraphData(token.url));
      dispatch(setPoolinfo(token));
      dispatch(GetTokenlistPrice({data:token.mintToken}))
    }


  }, [contract,dispatch])


  useEffect(() => {
    dispatch(Tokeninfo({ address: "sasa" }));
  }, [Feed,dispatch])


  useEffect(() => {
    if(address){
      dispatch(getTokenInfoforuser({ user: address}));
    }

  }, [address,Feed,dispatch])





  return (
    <div className='relative flex flex-col gap-5 w-full xl:w-3/6   '>
      {/* content */}
      <div className='flex flex-col gap-5 md:flex-row gap-x-5'>
        <Box icon={mintToken[0]?.name} name={mintToken[0]?.name} value={BNBbalance?formatprice(Number(BNBbalance)):""} type='Balance' />
        <Box icon={Feed.tokensymbol} name={Feed.tokensymbol} value={formatprice(Number(mintTokenBalance))} type='Balance' />
      </div>
      {/* content */}
      <div className='relative bg-white border border-[#d9d9d9] dark:border-none dark:bg-gray-800 rounded-2xl'>
        <SwapRoute />
      </div>
    </div>
  )
}

