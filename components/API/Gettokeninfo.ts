import {provider} from '../../utils/providerweb3';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { erc20ABI } from 'wagmi';
import { Token } from '../../typeing';
import axios from "axios";
const Gettokeninfoa = async (contractAddress:string) => {
    const contract = new ethers.Contract(contractAddress, erc20ABI, provider);
    // const ethPrice = await provider.getEtherPrice();
    // console.log("ethPrice",ethPrice);
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