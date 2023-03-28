import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit";
import { Token, Tokenlist as tokenType } from "../typeing";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Tokeninfo, GetTokenlistPrice, getTokenInfoforuser } from "../API/Gettokeninfo"
import { fetchSubgraphData } from "../API/Getprice"
import { Tokenlist, } from "../components/TokenList/Tokenlist";
import { Price } from "../typeing";
import { Gettokeninfoa } from "../API/Gettokeninfo"
interface PoolsState {
  active: boolean,
  rcvToken: Token,
  TokenList: tokenType[],
  price: Price,
  mintTokenBalance:string,
  SoldTokenBalance:string

}


const initialState: PoolsState = {
  active: true,
  rcvToken: {
    name: "",
    decimals: "",
    symbol: "",
    contractaddress: ""
  },
  TokenList: Tokenlist,
  price: {
    id: "",
    price: 0,
    totalSupply: 0,
    backing: 0,
    mintfee: 0,
    transferfee: 0,
    sellfee: 0,
    soldtokenid: "",
    tokensymbol: ""
  },
  mintTokenBalance:"0",
  SoldTokenBalance:"0"


};

// Defin e the slice for pools data and token prices
const poolsSlice = createSlice({
  name: "pools",
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<boolean>) => {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(Tokeninfo.fulfilled, (state, action) => {
      state.rcvToken.symbol = action.payload.tokensymbol;
    }),
      builder.addCase(GetTokenlistPrice.fulfilled, (state, action) => {
        const responses: any = action.payload;
        responses.forEach((response: any, index: any) => {
          const price = response.usdPrice;
          state.TokenList[index].price = price;

        })


      }),
      builder.addCase(fetchSubgraphData.fulfilled, (state, action) => {
        state.price = action.payload;
      
      }),
      builder.addCase(getTokenInfoforuser.fulfilled, (state, action) => {
        const data = action.payload;
        state.mintTokenBalance = data[0].balanceOf;
        state.SoldTokenBalance = data[1].balanceOf
    
      })

  }
});


export const { } = poolsSlice.actions;
export default poolsSlice.reducer;




