import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit";
import { Token, Tokenlist as tokenType } from "../typeing";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Tokeninfo ,GetTokenlistPrice} from "../components/API/Gettokeninfo"
import { Tokenlist, } from "../components/TokenList/Tokenlist";
interface PoolsState {
  active: boolean,
  rcvToken: Token,
  TokenList: tokenType[]

}


const initialState: PoolsState = {
  active: true,
  TokenList: Tokenlist,
  rcvToken: {
    name: "",
    decimals: "",
    symbol: "",
    contractaddress: ""
  },



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
      const  responses:any  = action.payload;

      responses.forEach((response:any, index:any) => {
        const price = response.usdPrice;
        state.TokenList[index].price= price;

      })
      

    })

  }
});


export const { } = poolsSlice.actions;
export default poolsSlice.reducer;




