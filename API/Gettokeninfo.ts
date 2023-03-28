import {provider} from '../utils/providerweb3';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import TokenABI from "../config/ABI/Token.json"
import { Token } from '../typeing';
import axios from "axios";
import type { RootState,AppDispatch } from "../store/store"

export const Gettokeninfoa = async (contractAddress:string) => {
    const contract = new ethers.Contract(contractAddress, TokenABI.abi, provider);
    const tokensymbol = await contract.symbol();
    return {tokensymbol};
  }


  export const Tokeninfo = createAsyncThunk(
    "pools/Tokeninfo",
    async (params: { address:string}, { dispatch ,getState},) => {
        const RootState = getState() as RootState;
        const contractAddresses = RootState.pools.price.soldtokenid;
     // Wait for all promises to resolve with Promise.all
       const results = await Gettokeninfoa(contractAddresses);
        // Return the results as the payload of the action
       return results;

    }
  );


  const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'hfFDDgyJiGcA93sEfRWQF61kqPD66rc7etsRDlEjjOZxQ3LVNZKMYRyB2Na3vx6f'}};


  export const GetTokenlistPrice = createAsyncThunk(
    'getTokenPrice',
    async (params: { data: Token[]}, { dispatch }) => {
      if (!params.data) return;
      const output = await axios.all(
        params.data.map((pool: Token) => {
          return axios.get(
            `https://deep-index.moralis.io/api/v2/erc20/${pool.contractaddress}/price?chain=bsc`,
            options
          );
        })
      );
      const responses = output.map(response => response.data);
       return responses;

    }
  );  

  

  export const Getbalance = async (contractAddress:string,user:string) => {
    const contract = new ethers.Contract(contractAddress, TokenABI.abi, provider);
    const tokenBalance = await contract.balanceOf(user);
    const balance =  ethers.utils.formatEther(tokenBalance);
     const balanceOf =  Number(balance).toFixed(1)
    return {balanceOf};
  }



//id means core token.. sold token means the output token...
  export const getTokenInfoforuser = createAsyncThunk(
    "token/getTokenInfo",
    async (params: { user:string}, { dispatch ,getState},) => {
      const RootState = getState() as RootState;
      const contractAddresses = [RootState.pools.price.id,RootState.pools.price.soldtokenid];
        // Create an array of promises for each contract address
      const promises = contractAddresses.map((address) => {
      return Getbalance(address,params.user);
     });
      // Wait for all promises to resolve with Promise.all
     const results = await Promise.all(promises);
    // Return the results as the payload of the action
     return results;
    
    }
  );