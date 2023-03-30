import { useState, useEffect } from 'react';

interface Props {
  priceA: any;
  amountB: any;
  priceC: any;
  stable:boolean
}
///priceA :
//amouintB:
//PriceC:
//stable:

export const useTotalPrice = ({ priceA, amountB, priceC ,stable}: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
   if(stable){
    const calculatedPrice = 1 * amountB/10**18 * priceC;
    setTotalPrice(calculatedPrice > 0 ? calculatedPrice : 0);
   }else{
    const calculatedPrice = priceA * amountB/10**18 * priceC;
    setTotalPrice(calculatedPrice > 0 ? calculatedPrice : 0);
   }
  }, [priceA, amountB, priceC]);

  return totalPrice;
};

