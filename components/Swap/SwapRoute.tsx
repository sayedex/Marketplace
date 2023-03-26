import React, { useRef, useCallback, useState } from 'react'
import TokenFiled from './TokenFiled';
import Popup from 'reactjs-popup';
import { useAccount } from 'wagmi';
import { Modal } from '../Model/Tokensellector';
import { Tokenlist, SellToken } from '../TokenList/Tokenlist';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { useRouter } from 'next/router';
import { useTransation } from '../../hooks/useTransation';
import { ethers } from 'ethers';
type Props = {}

export function SwapRoute() {
  const { address } = useAccount()
  const router = useRouter();
  const dispatch = useAppdispatch()
  const [open, setOpen] = useState(false);
  const [selectedSend, setSelectedSend] = useState(Tokenlist[0]);
  const [Tokenvalue, setTokenvalue] = useState("0.000001");
  //true means buy..
  const [isbuyorsell, setisbuyorsell] = useState<"buy" | "sell">('buy');
  const { rcvToken ,TokenList} = useAppSelector((state) => state.pools);
  //RcV token
  const tokenName = router.query.id ? router.query.id : "busd";
  const token = SellToken['busd'];
  const contractaddress = "0x09eff1aeb50dc3562367d3cdc301a49459e16da9"
  // transation hook...
  const { writeAsync } = useTransation(
    contractaddress,
    address,
    "mintWithNative",
    dispatch,
    Tokenvalue ? ethers.utils.parseEther(Tokenvalue) : "0.00000000001",
    true
  )



// we will take the BNB value   = > USD => TOKEN...


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle token input changes..
  const handleSelectedChange = (newSelected: any) => {
    setOpen(false)
    setSelectedSend(newSelected);
  };
  //handle token input changes..
  const handleTokenvalueChange = (value: any) => {
    setTokenvalue(value)
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
    writeAsync?.();
  }




  return (
    <div className='relative'>
      <Modal open={open} onClose={handleClose} onSelectedChange={handleSelectedChange} tokenlist={TokenList}/>



      <div className='w-full flex flex-row justify-between bg-transparent rounded-t-2xl border-none'>
        <button onClick={() => HandleBuyorSell("buy")} className={`${isbuyorsell == 'buy' ? "bg-green-600" : "bg-slate-700"} p-5 w-2/4 rounded-tl-2xl`}>BUY</button>
        <button onClick={() => HandleBuyorSell("sell")} className={`${isbuyorsell != 'buy' ? "bg-red-600" : "bg-slate-700"} p-5 w-2/4 rounded-tr-2xl`}>SELL</button>
      </div>

      {isbuyorsell == "buy" && <div>
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
          <p>Send</p>
          <TokenFiled name={selectedSend.name} openModel={true} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} issell={isbuyorsell} />
        </div>

        <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
          <p>Received</p>
          <TokenFiled name={rcvToken.symbol} openModel={false} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} issell={isbuyorsell} />
        </div>

      </div>}






      {isbuyorsell == "sell" && <div>
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
          <p>Send</p>
          <TokenFiled name={rcvToken.symbol} openModel={true} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} issell={isbuyorsell} />
        </div>

        <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
          <p>Received</p>
          <TokenFiled name={token.name} openModel={false} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} issell={isbuyorsell} />
        </div>

      </div>}



      <div className=' bg-slate-700 flex flex-row justify-center p-3 m-3 rounded-2xl '>
        <button onClick={() => handleSwap()} >SWAP</button>
      </div>


    </div>
  )
}

