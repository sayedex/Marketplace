import axios from "axios";
import { createSlice, createAsyncThunk ,PayloadAction,current} from "@reduxjs/toolkit";
import {Token} from "../typeing";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {Tokeninfo} from "../components/API/Gettokeninfo"

interface PoolsState {
active:boolean,
rcvToken:Token,

  }


const initialState: PoolsState = {
active:true,
rcvToken:{
  name:"",
  decimals:"",
  symbol:"",
  id:""
},



  };

  // Defin e the slice for pools data and token prices
 const poolsSlice = createSlice({
    name: "pools",
    initialState,
    reducers: {
      setFilterStatus:(state, action:PayloadAction<boolean>) =>{

      }
    },
    extraReducers: (builder) => {
      builder.addCase(Tokeninfo.fulfilled, (state, action) => {
      state.rcvToken.symbol = action.payload.tokensymbol;
      
      })

    }
  });


  export const {} = poolsSlice.actions;
  export default poolsSlice.reducer;




