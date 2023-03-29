import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// import erc20ABI from 'path/to/erc20ABI';
import tokenabi from "../config/ABI/Token.json"
import { provider } from '../utils/providerweb3';
import erc20 from "../config/ABI/Erc20.json";
import { erc721ABI } from 'wagmi';
export const useApprove = (contractAddress:string,user:any,spender:string,native:boolean) => {
  const [tokenAllowance, setTokenAllowance] = useState(0);





  useEffect(() => {
    const getTokenInfo = async () => {
      if(!user && !contractAddress && !provider) return;
      try{
        const contract = new ethers.Contract(contractAddress,erc20.abi, provider);
        const fetchUserAllowance = await contract.allowance(user,spender);
        setTokenAllowance(fetchUserAllowance);   
      }catch(error){


      }
   

    };
    if(!native){
      getTokenInfo();
    }else{
      setTokenAllowance(0)
    }

  }, [contractAddress,user]);

  return tokenAllowance;
};
/// -> ->       