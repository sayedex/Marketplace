import Head from 'next/head'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

import {useAppSelector,useAppdispatch} from "../hooks/redux"

import { Header } from '../components/Header/Header';
import {Sidebar} from "../components/Sidebar/Sidebar";
import {SwapLeft} from "../components/Swapinterface/SwapLeft"

export default function  Home (){


  return (
    //flex relative bg-gray-800 h-screen overflow-hidden
<div className='flex flex-col flex-1 overflow-hidden relative bg-[#f8fafc] dark:bg-slate-900'>
 <Header/> 
<SwapLeft id="sasas"/>

</div>
  )
}



