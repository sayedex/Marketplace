import React, { useRef, useCallback, useState } from 'react'
import TokenFiled from './TokenFiled';
import Popup from 'reactjs-popup';
import { useAccount } from 'wagmi';
import { Modal } from '../Model/Tokensellector';
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { useTotalPrice } from '../../hooks/useTotalPrice';
import { useCalculatePrice } from '../../hooks/useCalculatePrice';
import ShowingPrice from './ShowingPrice';
import { useApprove } from "../../hooks/useApprove";
import { Buymodel } from '../Model/Buymodel';
import { Selltoken } from '../Model/Selltoken';
import { Swich } from './Swich';
import useDirectCall from '../../hooks/useTrsanstionhelper';
import { useContract, useSigner } from 'wagmi'
import { toast } from 'react-hot-toast';


export function SwapRoute() {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const router = useRouter();
  const dispatch = useAppdispatch()
  const { rcvToken, Feed, poolInfo } = useAppSelector((state) => state.pools);
  const MintModel = useRef<{ openPopup: () => void, closePopup: () => void }>(null);
  const sellModel = useRef<{ openPopup: () => void, closePopup: () => void }>(null);
  const [selectedSend, setSelectedSend] = useState(0);
  const [Tokenvalue, setTokenvalue] = useState('0');
  //true means buy..
  const [isbuyorsell, setisbuyorsell] = useState<boolean>(true);
  //RcV token
  const {HandleApprove,SellTokenloading:Approveing}  = useDirectCall(signer,poolInfo.contractaddress)



  // BNB/DAI => Mint token...
  const MintValue = useTotalPrice({
    priceA: poolInfo.mintToken[selectedSend]?.price,
    amountB: Tokenvalue,
    priceC: Feed.price,
    stable: poolInfo.mintToken[selectedSend]?.stable,
  });




  //it will check user spended token allowance ... it will take contract address with user address
  const { tokenAllowance: MintTokenallowance, } = useApprove(poolInfo.mintToken[selectedSend]?.contractaddress, address, poolInfo.contractaddress, poolInfo.mintToken[selectedSend]?.isnative, Tokenvalue, dispatch);



  const { approveToken, tokenAllowance: soldTokenAllowance, isLoading: loadSoldtokenApprove } = useApprove(poolInfo.contractaddress, address, poolInfo.contractaddress, false, Tokenvalue, dispatch);


  // Token = > stable token convert -> 
  const { calculatePrice, amountOut } = useCalculatePrice({
    totalSupply: Feed.totalSupply,
    backingValue: Feed.backing,
    Soldfees: Feed.sellfee
  })



  // we will take the BNB value   = > USD => TOKEN...


  const handleOpen = () => {

  };

  const handleClose = () => {

  };

  //handle token input changes..
  const handleSelectedChange = (newSelected: any) => {
    setSelectedSend(newSelected);
  };
  //handle token input changes..
  const handleTokenvalueChange = (value: any) => {
    console.log(value);

    setTokenvalue(value);

  };



  //handle buy/sell manu...
  const HandleBuyorSell = (type: string) => {
    if (type == "buy") {
      setisbuyorsell(true)
    } else {
      setisbuyorsell(false)
    }
  }


  const handleSwap = async () => {
    if(!address) return toast.error("Connect wallet!");
    if (Tokenvalue != "0") {
      if (isbuyorsell) {
        MintModel.current?.openPopup();

      } else {
        sellModel.current?.openPopup();
      }
    } else {
      ////
    }
  }

  const handleChanebuysell = () => {
    setisbuyorsell(!isbuyorsell)
  }

  const handleapprove = async () => {
    await HandleApprove(
      [poolInfo.contractaddress,ethers.utils.parseUnits(Tokenvalue)],
      "approve"
    );

  }

  return (
    <div className='relative'>
      {/* <Modal open={open} onClose={handleClose} onSelectedChange={handleSelectedChange} tokenlist={TokenList} /> */}

      <div className='w-full flex flex-row text-white  justify-between bg-transparent rounded-t-2xl border-none'>
        <button onClick={() => HandleBuyorSell("buy")} className={`${isbuyorsell ? "bg-green-600" : "bg-slate-700"} p-5 w-2/4 rounded-tl-2xl`}>BUY</button>
        <button onClick={() => HandleBuyorSell("sell")} className={`${!isbuyorsell ? "bg-red-600" : "bg-slate-700"} p-5 w-2/4 rounded-tr-2xl`}>SELL</button>
      </div>

      {isbuyorsell && <div>
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
          <p>Send</p>
          <TokenFiled name={poolInfo.mintToken[selectedSend]?.name} model={false} handleTokenvalueChange={handleTokenvalueChange} OpenModel={handleOpen} />
        </div>
        <Swich isbuyorsell={isbuyorsell} handleChanebuysell={handleChanebuysell} />
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
          <p>Received</p>
          <ShowingPrice name={Feed.tokensymbol} value={MintValue} />
        </div>

      </div>}


      {!isbuyorsell && <div>
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer ' >
          <p>Send</p>
          <TokenFiled name={Feed.tokensymbol} handleTokenvalueChange={handleTokenvalueChange} model={false} OpenModel={handleOpen} />
        </div>
        <Swich isbuyorsell={isbuyorsell} handleChanebuysell={handleChanebuysell} />
        <div className='m-3 flex flex-col gap-y-3 cursor-pointer'>
          <p>Received</p>
          <ShowingPrice name={rcvToken.symbol} value={amountOut(Number(Tokenvalue))} />
        </div>

      </div>}


      <div className='   dark:border-none flex flex-row justify-center m-3 rounded-2xl '>

        {
          isbuyorsell ? !poolInfo.mintToken[selectedSend]?.isnative && MintTokenallowance == 0 || MintTokenallowance == null ? <button className='btn'   >Approve
          </button> : <button className="btn" onClick={() => handleSwap()} >SWAP </button> : null
        }

        {
          !isbuyorsell ? (Number(Tokenvalue) * 10 ** 18) > soldTokenAllowance ? <button disabled={Approveing} className='btn' onClick={() => handleapprove()} >
            {`${loadSoldtokenApprove ? "Approveing.." : "Approve"}`}
          </button> : <button className='btn' onClick={() => handleSwap()} >SWAP </button> : null
        }
      </div>

      {<Buymodel Input={Tokenvalue} output={MintValue} ref={MintModel} />}
      <Selltoken Input={Tokenvalue} output={amountOut(Number(Tokenvalue))} ref={sellModel} />
    </div>
  )
}

