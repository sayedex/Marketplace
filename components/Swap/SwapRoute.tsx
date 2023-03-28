import React, { useRef, useCallback, useState } from 'react'
import TokenFiled from './TokenFiled';
import Popup from 'reactjs-popup';
import { useAccount } from 'wagmi';
import { Modal } from '../Model/Tokensellector';
import { SellToken, Tokenlist } from '../TokenList/Tokenlist';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { useRouter } from 'next/router';
import { useTransation } from '../../hooks/useTransation';
import { ethers } from 'ethers';
import { useTotalPrice } from '../../hooks/useTotalPrice';
import { useCalculatePrice } from '../../hooks/useCalculatePrice';
import ShowingPrice from './ShowingPrice';
import { useApprove } from "../../hooks/useApprove";
type Props = {}

export function SwapRoute() {
  const { address } = useAccount()
  const router = useRouter();
  const dispatch = useAppdispatch()
  const { rcvToken, TokenList, price } = useAppSelector((state) => state.pools);
  const [open, setOpen] = useState(false);
  const [selectedSend, setSelectedSend] = useState(0);
  const [Tokenvalue, setTokenvalue] = useState("0.000001");
  //true means buy..
  const [isbuyorsell, setisbuyorsell] = useState<"buy" | "sell">('buy');
  //RcV token
  const tokenName = router.query.id ? router.query.id : "busd";
  const token = SellToken['busd'];
  const contractaddress = "0x09eff1aeb50dc3562367d3cdc301a49459e16da9"
  //mint token
  const { writeAsync } = useTransation(
    contractaddress,
    address,
    "mintWithNative(address,uint256)",
    dispatch,
    Tokenvalue ? ethers.utils.parseEther(Tokenvalue) : "0.00000000001",
    true,
    [address,0]
  )
  //sell token,,
  const { writeAsync:sellToken } = useTransation(
    contractaddress,
    address,
    "sell(uint256)",
    dispatch,
    0,
    false,
    [Number(Tokenvalue)*10**18]
  )

  const { writeAsync:ApproveToken } = useTransation(
    contractaddress, /// it will be the stal
    address,
    "approve(address,uint256)",
    dispatch,
    0,
    false,
    []
  )






  // BNB/DAI => Mint token...
  const MintValue = useTotalPrice({
    priceA: (TokenList[selectedSend].price),
    amountB: Tokenvalue,
    priceC: price.price,
    stable: TokenList[selectedSend].stable
  });




  //it will check user spended token allowance ... it will take contract address with user address
  const allowance = useApprove(TokenList[selectedSend].contractaddress, address, contractaddress);



  // Token = > stable token convert -> 
  const { calculatePrice, amountOut } = useCalculatePrice({
    totalSupply: price.totalSupply,
    backingValue: price.backing
  })



  // we will take the BNB value   = > USD => TOKEN...


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle token input changes..
  const handleSelectedChange = (newSelected: any) => {
    setOpen(false);
    setSelectedSend(newSelected);
  };
  //handle token input changes..
  const handleTokenvalueChange = (value: any) => {
    setTokenvalue(value);
  };



  //handle buy/sell manu...
  const HandleBuyorSell = (type: string) => {
    if (type == "buy") {
      setisbuyorsell('buy')
    } else {
      setisbuyorsell('sell');
    }
  }


  const handleSwap = async () => {
    if (isbuyorsell == "buy") {
      writeAsync?.();
    } else {
      sellToken?.()
    }

  }



  return (
    <div className='relative'>
      <Modal open={open} onClose={handleClose} onSelectedChange={handleSelectedChange} tokenlist={TokenList} />



      <div className='w-full flex flex-row text-white  justify-between bg-transparent rounded-t-2xl border-none'>
        <button onClick={() => HandleBuyorSell("buy")} className={`${isbuyorsell == 'buy' ? "bg-green-600" : "bg-slate-700"} p-5 w-2/4 rounded-tl-2xl`}>BUY</button>
        <button onClick={() => HandleBuyorSell("sell")} className={`${isbuyorsell != 'buy' ? "bg-red-600" : "bg-slate-700"} p-5 w-2/4 rounded-tr-2xl`}>SELL</button>
      </div>

      {isbuyorsell == "buy" && <div>
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
          <p>Send</p>
          <TokenFiled name={TokenList[selectedSend].name} model={true} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} />
        </div>

        <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
          <p>Received</p>
          <ShowingPrice name={price.tokensymbol} value={MintValue} />
        </div>

      </div>}






      {isbuyorsell == "sell" && <div>
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
          <p>Send</p>
          <TokenFiled name={price.tokensymbol} handleTokenvalueChange={handleTokenvalueChange} model={false} OpenModel={handleOpen} />
        </div>

        <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
          <p>Received</p>
          <ShowingPrice name={rcvToken.symbol} value={amountOut(Number(Tokenvalue))} />
        </div>

      </div>}



      <div className=' bg-[#f0f0f0] border dark:border-none dark:bg-slate-700 flex flex-row justify-center p-3 m-3 rounded-2xl '>


        {
        !TokenList[selectedSend].native &&  allowance == 0 || allowance==null  ? <button  >Approve </button> : <button onClick={() => handleSwap()} >SWAP </button>
        }


      </div>


    </div>
  )
}

