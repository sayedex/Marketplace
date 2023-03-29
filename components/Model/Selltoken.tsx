import React, { useState, forwardRef, useImperativeHandle,useEffect } from 'react';
import Popup from 'reactjs-popup';
import {useAppdispatch,useAppSelector} from "../../hooks/redux"
import { CalculatorIcon ,XMarkIcon} from '@heroicons/react/24/outline';
import { useAccount } from 'wagmi';
import styled from 'styled-components';
import { Showingoutput } from './Showingoutput';
import { AiOutlineArrowDown } from "react-icons/ai";
import { ethers } from 'ethers';
import { useTransation } from '../../hooks/useTransation';
type Props = {
Input:any,
output:any
}

export const Selltoken = forwardRef(({Input,output}:Props,ref: any) => {
    const {address} = useAccount();
    //costom hook for stake fund...
    const dispatch = useAppdispatch();
    const { rcvToken, TokenList, price ,poolInfo,mintTokenBalance,BNBbalance} = useAppSelector((state) => state.pools);
    const [open, setOpen] = useState(false);

    

    useImperativeHandle(ref, () => {
      return {
        openPopup: () => setOpen(true),
        closePopup: () => setOpen(false),
      };
    });
  

     const closeModal = () =>{
        setOpen(false);
     }

const ContentStyle ={
    backgroundColor: '#303030',
    borderRadius: '10px',
    padding:0,
    width:"50%",
    maxWidth:"500px"

}


   //sell token,,
   const { writeAsync } = useTransation(
    poolInfo.contractaddress,
    address,
    "sell(uint256)",
    dispatch,
    0,
    false,
    [Number(Input)*10**18]
  )

const handlesell = async()=>{
  writeAsync?.()
}



    return (
      <div>
        <Popup contentStyle={ContentStyle}   open={open}  className="rounded-lg bg-red-400"  onClose={closeModal}>
          <div className="modal rounded-lg">

{/* header */}
<div className=' rounded-t-[19px]  py-4  border-b mb-4 border-gray-700'>

<div className='flex flex-row  justify-between rounded-t-[19px] px-4'>
<div className='text-lg font-semibold'>
Buy Token 
</div>

<div className='relative  h-fit'>
    <XMarkIcon onClick={()=>setOpen(o => !o)} className="text-gray-900 hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative" width={22} height={22}/>
</div>
</div>

</div>



{/* Balance */}

<div className='flex flex-row items-center justify-between py-2 px-4 border-b border-gray-700'>
    <div className='font-semibold text-lg'>
    Balance
    </div>

  <div>
    {mintTokenBalance}    {price.tokensymbol}
  </div>

</div>


{/* Balance */}

{/* token price  */}

<div className='flex flex-row items-center justify-between py-2 px-4 border-b border-gray-700'>
<div className='font-semibold text-lg'>
   {price.tokensymbol}
    </div>

  <div>
    {price.price/10**18}
  </div>

</div>
{/* token price  */}


{/* inputToken */}

<div>
<Showingoutput name={price.tokensymbol} value={Input}/>
<div className='text-center relative flex justify-center m-auto bg-[#414141] rounded-xl w-fit p-2 items-center'>
    <AiOutlineArrowDown className='text-center '/>
</div>
<Showingoutput name={rcvToken.symbol} value={output}/>
</div>

{/* estimated output */}




{/* buyOrSellToken */}


<div className='flex flex-row w-full justify-center gap-5 px-4 mb-4'>

<button onClick={()=>closeModal()} className='bg-red-500 w-full min-h-[50px] rounded-xl' >Cancel</button>
<button onClick={()=>handlesell()}  className='bg-green-600 w-full min-h-[50px] rounded-xl' >Sell</button>
</div>


{/* buyOrSellToken */}



           </div>
        </Popup>
      </div>
    );
    
    

    })

    Selltoken.displayName = 'Selltoken';
