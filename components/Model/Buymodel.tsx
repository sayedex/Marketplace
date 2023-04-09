import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { useAppdispatch, useAppSelector } from "../../hooks/redux"
import { CalculatorIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAccount } from 'wagmi';
import styled from 'styled-components';
import { Showingoutput } from './Showingoutput';
import { AiOutlineArrowDown } from "react-icons/ai";
import { ethers } from 'ethers';
import { Toast, toast } from 'react-hot-toast';
import TokenABI from "../../config/ABI/Token.json"
import useDirectCall from '../../hooks/useTrsanstionhelper';
import { useContract, useSigner } from 'wagmi';
import ScaleLoader from "react-spinners/ScaleLoader";
type Props = {
  Input: string,
  output: any
}

export const Buymodel = forwardRef(({ Input, output }: Props, ref: any) => {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  //costom hook for stake fund...
  const dispatch = useAppdispatch();
  const { rcvToken, Feed, poolInfo, mintTokenBalance, BNBbalance } = useAppSelector((state) => state.pools);
  const [open, setOpen] = useState(false);
  const {BuyToken,SellTokenloading:buytokenloading}  = useDirectCall(signer,poolInfo.contractaddress)


  useImperativeHandle(ref, () => {
    return {
      openPopup: () => setOpen(true),
      closePopup: () => setOpen(false),
    };
  });


  const closeModal = () => {
    setOpen(false);
  }

  const ContentStyle = {
    backgroundColor: '#303030',
    borderRadius: '10px',
    padding: 0,
    width: "50%",
    maxWidth: "500px"

  }



console.log(Input);



  const handleMint = async () => {
    console.log(Input);
    
    if (Number(Input) < Number(BNBbalance)) {
     await BuyToken(
      [address,0],
      'mintWithNative',
      Input
     )

    } else {
      toast.error("Low balance")
    }

  }





  return (
    <div>
      <Popup contentStyle={ContentStyle} open={open} className="rounded-lg bg-red-400" onClose={closeModal}>
        <div className="modal rounded-lg bg-white pb-3 dark:bg-[#41414100] ">

          {/* header */}
          <div className=' rounded-t-[19px]  py-4  border-b mb-4 border-gray-200 dark:border-[#4e4a4a] '>

            <div className='flex flex-row  justify-between rounded-t-[19px] px-4'>
              <div className='text-lg font-semibold'>
                Buy Token
              </div>

              <div className='relative  h-fit'>
                <XMarkIcon onClick={() => setOpen(o => !o)} className="text-gray-900 hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative" width={22} height={22} />
              </div>
            </div>

          </div>



          {/* Balance */}

          <div className='flex flex-row items-center justify-between py-2 px-4 border-b border-gray-200 dark:border-[#4e4a4a] '>
            <div className='font-semibold text-lg'>
              Balance
            </div>

            <div>
              {mintTokenBalance}    {Feed.tokensymbol}
            </div>

          </div>


          {/* Balance */}

          {/* token price  */}

          <div className='flex flex-row items-center justify-between py-2 px-4 border-b border-gray-200 dark:border-[#4e4a4a] '>
            <div className='font-semibold text-lg'>
              {Feed.tokensymbol}
            </div>

            <div>
              {Feed.price / 10 ** 18}
            </div>

          </div>
          {/* token price  */}


          {/* inputToken */}

          <div>
            <Showingoutput name={poolInfo.mintToken[0]?.name} value={Number(Input)} />
            <div className='text-center relative flex justify-center m-auto bg-white border dark:bg-[#414141] rounded-xl w-fit p-2 items-center'>
              <AiOutlineArrowDown className='text-center text-black dark:text-white ' />
            </div>
            <Showingoutput name={Feed.tokensymbol} value={output} />
          </div>

          {/* estimated output */}




          {/* buyOrSellToken */}


          <div className='flex flex-row w-full justify-center gap-5 px-4 mb-4'>

            <button onClick={() => closeModal()} className='modelBtncancel' >Cancel</button>
            <button disabled={buytokenloading} onClick={() => handleMint()} className="modelBtnbuy" >{buytokenloading ? "" : "Swap"}
            
            <ScaleLoader
            loading={buytokenloading}
            color="#ffffff"
            className="text-white"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
            
            </button>
          </div>


          {/* buyOrSellToken */}



        </div>
      </Popup>
    </div>
  );



})

Buymodel.displayName = 'Buymodel';
