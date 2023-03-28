import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
// import erc20ABI from 'path/to/erc20ABI';
import tokenabi from "../config/ABI/Token.json"
import { provider } from '../utils/providerweb3';
import { erc721ABI } from 'wagmi';
export const useApprove = (contractAddress:string,user:any,spender:string) => {
  const [tokenAllowance, setTokenAllowance] = useState(null);

  useEffect(() => {
    const getTokenInfo = async () => {
      if(!user) return;
      const contract = new ethers.Contract(contractAddress, tokenabi.abi, provider);
      const fetchUserAllowance = await contract.allowance(user,spender);
      console.log(fetchUserAllowance);
      
      setTokenAllowance(fetchUserAllowance);
    };
    getTokenInfo();
  }, [contractAddress,user]);

  return tokenAllowance;
};
