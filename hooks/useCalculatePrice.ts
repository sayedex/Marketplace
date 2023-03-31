import { useCallback } from 'react';

interface CalculatePriceProps {
  totalSupply: number;
  backingValue:number;
  Soldfees:number
}

export function useCalculatePrice({
  totalSupply,
  backingValue,
  Soldfees
}: CalculatePriceProps) {
 const precision =10**18;
  const calculatePrice = useCallback(() => {
    // const totalShares = totalSupply === 0 ? 1 : totalSupply;
    return (backingValue * precision) / totalSupply;
  }, [backingValue, precision, totalSupply]);

  const amountOut = useCallback(
    (numTokens: number) => {
      const price  = calculatePrice() * numTokens / precision;
      const fee = (price * (Soldfees/10000))/100; // calculate 10% fee
      return price - fee;
    },
    [calculatePrice, precision]
  );

  return { calculatePrice, amountOut };
}
