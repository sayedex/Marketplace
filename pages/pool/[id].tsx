import React from 'react'
import { useRouter } from 'next/router';
import { Header } from '../../components/Header/Header';
import {SwapLeft} from "../../components/Swapinterface/SwapLeft"
const Id = () => {
    const router = useRouter();
  const { id } = router.query;
  return (
    <div className='lex flex-1 flex-col relative overflow-hidden bg-slate-900'>
    <Header/>
    <SwapLeft id='asa'/>
    </div>
  )
}

export default Id;