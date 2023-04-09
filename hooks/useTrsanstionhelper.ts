import {getContractInstance} from "../utils/Contracthelper";
import React, { useState, useEffect } from 'react';
import { Toast, toast } from 'react-hot-toast';
import { ethers, } from "ethers";
const useDirectCall = (signer:any,contractaddress:string) => {
  const [SellTokenloading, setSellTokenLoading] = useState(false);

  const SellToken = async (args: Array<any>, fname: string) => {
    const name = String(fname);
    setSellTokenLoading(true);
    //coming from hook
    const myContract = await getContractInstance(signer,contractaddress);
    try {
      const response = await myContract?.[name](...args);
      const receipt = await response.wait();
      toast.success("Token sold successfully");
      setSellTokenLoading(false);
    } catch (error) {
      setSellTokenLoading(false);
      console.log(error);
      toast.error("Something went wrong try again")
      //failed
    }
  };


  const BuyToken = async (args: Array<any>, fname: string,Amount:string) => {
    const name = String(fname);
    setSellTokenLoading(true);
    console.log(ethers.utils.parseUnits(Amount));
    
    //coming from hook
    const myContract = await getContractInstance(signer,contractaddress);
    try {
      
    //  const gasprice =await myContract.estimateGas?.[name](...args,{value: (ethers.utils.parseUnits(Amount))});
      const response = await myContract?.[name](
        ...args,
      {
        // gasLimit:(gasprice?.toNumber()),
        value:(ethers.utils.parseUnits(Amount))
  
      }
    );

      const receipt = await response.wait();
      toast.success("Token mint successfully");
      setSellTokenLoading(false);
    } catch (error) {
      setSellTokenLoading(false);
      console.log(error);
      toast.error("Something went wrong try again")
      //failed
    }
  };




  const HandleApprove = async (args: Array<any>, fname: string) => {
    const name = String(fname);
    setSellTokenLoading(true);
    //coming from hook
    const myContract = await getContractInstance(signer,contractaddress);
    try {
      const response = await myContract?.[name](...args);
      const receipt = await response.wait();
      toast.success("Approve done");
      setSellTokenLoading(false);
    } catch (error) {
      setSellTokenLoading(false);
      console.log(error);
      toast.error("Something went wrong try again")
      //failed
    }
  };


  return { SellTokenloading, SellToken ,BuyToken,HandleApprove};
};

export default useDirectCall;