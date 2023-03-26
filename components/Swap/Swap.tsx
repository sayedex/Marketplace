import React, { useEffect } from 'react'
import { Box } from '../Box/Box';
import { SwapRoute } from './SwapRoute';
import { Tokeninfo ,GetTokenlistPrice} from '../API/Gettokeninfo';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { Tokenlist,Allpool } from '../TokenList/Tokenlist';
import { useRouter } from 'next/router';
type Props = {
  id: string
}

export const Swap = ({ id }: Props) => {
  const dispatch = useAppdispatch();
  const router = useRouter();
  const contract = router.query.id as string;

  useEffect(() => {
    if(contract){
      const token = Allpool[contract];    
      dispatch(Tokeninfo({ address: token.contractaddress }))
    }else{
      const token = Allpool["0x09eff1aeb50dc3562367d3cdc301a49459e16da9"];
      dispatch(Tokeninfo({ address: token.contractaddress }))
    }
    dispatch(GetTokenlistPrice({data:Tokenlist}))

  }, [contract])






  return (
    <div className='md:w-2/6 relative flex flex-col gap-5'>
      {/* content */}
      <div className='flex flex-row gap-x-5'>
        <Box name='busd' value='1000' type='TVL' />
        <Box name='busd' value='1000' type='TVL' />
      </div>
      {/* content */}
      <div className='relative bg-gray-800 rounded-2xl'>
        <SwapRoute />
      </div>
    </div>
  )
}

