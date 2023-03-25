import { usePrepareContractWrite ,useContractWrite,useWaitForTransaction} from 'wagmi';
import { ShowToast } from '../components/Model/ShowToast';
import { setAllowance } from '../store/poolSlice';
import { ethers } from 'ethers';
import { erc20ABI } from 'wagmi';
import {useAppSelector,useAppdispatch} from "../hooks/redux";

export function useTransation(
     pool: any, 
     dispatch: any,
     ) 
     {

        //without Ox...
    
        const TokenwithoutPrefix = pool.Staketoken.id.slice(2);
        const pooladress = pool.id.slice(2);
        const maxValue = ethers.constants.MaxUint256;

  const { config ,error,isError,isLoading:loadInstance} = usePrepareContractWrite({
    address: `0x${TokenwithoutPrefix}`,
    abi:erc20ABI,
    functionName:"approve",
    args:[`0x${pooladress}`, maxValue],
  })

  const { writeAsync,data ,isSuccess} = useContractWrite(config)
  const {status,isLoading,isFetching} = useWaitForTransaction({
    hash: data?.hash,
    onSettled(data, error) {
      ShowToast("Approve done",data?.transactionHash)
      dispatch(setAllowance({poolId:pool.id,allowance:ethers.utils.formatEther(maxValue)}));
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
