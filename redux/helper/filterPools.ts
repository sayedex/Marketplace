import { filterItem } from "../../Type/filterItem";
import { pools } from "../../typeing";


export const filterPools = (pools: pools[], filter: filterItem) => {
  switch(filter){
    //Top staked pool
    case filterItem.Totalstaked:
    return pools.sort((a:pools,b:pools) => b.Totalstaked - a.Totalstaked);
    //filterItem.Totalstaked end
    break;
   //Top APR 
   case filterItem.Apr:
    return pools.sort((a:pools, b:pools) => {
      if (a.apr && b.apr) {
        return b.apr - a.apr;
      } else {
        // Return a value indicating that a and b are equivalent for sorting purposes
        return 0;
      }
    });

  break;         
   //filterItem.Apr en
   ///it will filter only staked pool by user...
  case filterItem.Staked:
    return pools.filter((data:pools)=>data.staked)
break;

  case filterItem.Search:
    return pools.filter((data:pools)=>data.staked)
   break;

    default:
      return pools

   

}
  };