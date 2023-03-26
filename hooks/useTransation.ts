import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi';
// import { ShowToast } from '../components/Model/ShowToast';
import TokenABI from "../config/ABI/Token.json"
import { ethers } from 'ethers';
import { erc20ABI } from 'wagmi';
import { useAppSelector, useAppdispatch } from "../hooks/redux";

export function useTransation(
  contractAddress: string,
  user: any,
  fname: string,
  dispatch: any,
  value: any,
  isnative:boolean
) {

  //without Ox...

  const pooladress = contractAddress.slice(2);
  const maxValue = ethers.constants.MaxUint256;

  const { config, error, isError, isLoading: loadInstance } = usePrepareContractWrite({
    address: `0x${pooladress}`,
    abi: TokenABI.abi,
    functionName: fname,
    args: [user, 0],
    overrides: {
      value:isnative && value
    }
  })

  const { writeAsync, data, isSuccess } = useContractWrite(config)
  const { status, isLoading, isFetching } = useWaitForTransaction({
    hash: data?.hash,
    onSettled(data, error) {
      // ShowToast("Approve done",data?.transactionHash);
      console.log("doneee");


    },
  })

  return {
    config,
    error,
    isError,
    loadInstance,
    writeAsync,
    data,
    isSuccess,
    status,
    isLoading,
    isFetching
  }
}
