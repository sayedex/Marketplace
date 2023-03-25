import React, { useRef, useCallback, useState } from 'react'
import TokenFiled from './TokenFiled';
import Popup from 'reactjs-popup';
import { Modal } from '../Model/Tokensellector';
import { Tokenlist } from '../TokenList/Tokenlist';
import {useAppSelector,useAppdispatch} from "../../hooks/redux"
type Props = {}

export function SwapRoute() {
  const [open, setOpen] = useState(false);
  const [selectedSend, setSelectedSend] = useState(Tokenlist[0]);
  const [Tokenvalue, setTokenvalue] = useState(0);
  //true means buy..
  const [isbuyorsell, setisbuyorsell] = useState<"buy"|"sell">('buy');
  const {rcvToken} = useAppSelector((state) => state.pools);
  

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
      //we will update as user rcv sell to token..
      setSelectedSend(Tokenlist[0])
      setisbuyorsell('sell');
  }
  }

  return (
    <div className='relative'>
      <Modal open={open} onClose={handleClose} onSelectedChange={handleSelectedChange} />



      <div className='w-full flex flex-row justify-between bg-transparent rounded-t-2xl border-none'>
        <button onClick={() => HandleBuyorSell("buy")} className={`${isbuyorsell=='buy'?"bg-green-600":"bg-slate-700"} p-5 w-2/4 rounded-tl-2xl`}>BUY</button>
        <button onClick={() => HandleBuyorSell("sell")} className={`${isbuyorsell!='buy'?"bg-red-600":"bg-slate-700"} p-5 w-2/4 rounded-tr-2xl`}>SELL</button>
      </div>

      <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
        <p>Send</p>
        <TokenFiled name={isbuyorsell=='buy'?selectedSend.name:rcvToken.symbol} openModel={true} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} issell={isbuyorsell} />
      </div>

      <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
        <p>Received</p>
        <TokenFiled name={isbuyorsell=='buy'?rcvToken.symbol:selectedSend.name} openModel={false} handleTokenvalueChange={handleTokenvalueChange}  OpenModel={handleOpen} issell={isbuyorsell}  />
      </div>



      <div className=' bg-slate-700 flex flex-row justify-center p-3 m-3 rounded-2xl '>
        <button onClick={() => handleOpen()} >SWAP</button>
      </div>


    </div>
  )
}

