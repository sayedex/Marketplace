import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction ,} from 'redux-thunk';
import { request, GraphQLClient } from 'graphql-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState,AppDispatch } from "../store/store"
import { gql } from 'graphql-request';



export const POOl_QUERY = gql`
query pools{
  pools{
    id
    price
    timestamp
    totalSupply
    mintfee
    transferfee
    backing
    sellfee
    soldtokenid
    tokensymbol

  }
}
`
export const fetchSubgraphData = createAsyncThunk(
  "pools/fetchSubgraphData",
  async (apiUrl: string, thunkAPI) => {
 
    try {
      const client = new GraphQLClient(apiUrl);

      const data = await client.request(POOl_QUERY);
      return data.pools[0];
  
    } catch (error) {
        console.log(error);
        
    }
  }
);