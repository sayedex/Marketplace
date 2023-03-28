import { useCallback } from 'react';

interface CalculatePriceProps {
  totalSupply: number;
  backingValue:number;
}

export function useCalculatePrice({
  totalSupply,
  backingValue,
}: CalculatePriceProps) {
 const precision =10**18;
  const calculatePrice = useCallback(() => {
    // const totalShares = totalSupply === 0 ? 1 : totalSupply;
    return (backingValue * precision) / totalSupply;
  }, [backingValue, precision, totalSupply]);

  const amountOut = useCallback(
    (numTokens: number) => {
      return calculatePrice() * numTokens / precision;
    },
    [calculatePrice, precision]
  );

  return { calculatePrice, amountOut };
}
