
import {useAppSelector,useAppdispatch} from "../hooks/redux"
import { useEffect } from 'react';
//wagmi hook
import { useAccount } from 'wagmi'
//wallet slice 
//components..
import { Header } from '../components/Header/Header';
import {Sidebar} from "../components/Sidebar/Sidebar"
const  Layout = (props:any)=> {
  // const { address, isConnecting, isDisconnected ,isConnected} = useAccount()
    // const dispatch = useAppdispatch()






    return (
<div className='flex relative bg-gray-800 h-screen '>
     <div  className=' hidden md:flex md:flex-shrink-0 w-[236px] h-full;'>
<Sidebar/>
</div>
{props.children}
   </div>
    )
  }
  
  
  export default Layout