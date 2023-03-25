import {provider} from '../../utils/providerweb3';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { erc20ABI } from 'wagmi';

const Gettokeninfoa = async (contractAddress:string) => {
    const contract = new ethers.Contract(contractAddress, erc20ABI, provider);
    const tokensymbol = await contract.symbol();
    return {tokensymbol};
  }


  export const Tokeninfo = createAsyncThunk(
    "pools/Tokeninfo",
    async (params: { address:string}, { dispatch }) => {
        const data = await Gettokeninfoa(params.address);
        console.log(data);
        
       return data;
    }
  );