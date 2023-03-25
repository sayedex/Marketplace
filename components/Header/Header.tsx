import { useConnect } from 'wagmi';
// import isMount from "../../hooks/walletstate";
import { useTheme } from "next-themes" 
import { ExampleButton } from './connect';
import {Popover, Transition} from '@headlessui/react'
import logo from "../../public/logo.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState ,useEffect} from 'react';
import Link from 'next/link';
import Sitelogo  from "../../public/Lucaxfinance.png";
import Image from 'next/image';
import { useNetwork, useSwitchNetwork } from 'wagmi'
//ALL Chian LOGO....


import Bsc from "../../public/ChianId/bsc.svg"



export function Header() {
    const { theme, setTheme } = useTheme(); 
    const [isMounted, setIsMounted] = useState(false);
    const { chain } = useNetwork()
    const { chains, error, isLoading, pendingChainId, switchNetwork } =useSwitchNetwork()
    // const {isRender}=  isMount();



useEffect(() => {
    setIsMounted(true);
    setTheme("dark")
  }, []);
  const ChangeToDarkMood = ()=>{
    if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
      }
  }







 return (

    <div className=' flex flex-col min-h-68px w-full box-border flex-shrink-0 absolute z-50 top-0 right-0 text-white bg-slate-400 border-b-1 border-gray-700 rounded-tl-xl' >

<div className='relative flex justify-between items-center min-h-68px px-4 py-4 shadow-none'>


{/* child logo div */}
<div>

<h1>Scan</h1>

</div>
{/* child logo div */}


{/* button with chindChange */}

<div className='flex flex-row items-center gap-x-3'>


<div className='flex flex-row items-center gap-2 bg-[#3b3c46] rounded-2xl px-3 py-1 h-9'>

<Image src={Bsc.src} width={20} height={20} alt="chindId" />
<span>BNBChain</span>
</div>

<ExampleButton/>

</div>

{/* button with chindChange */}
</div>
    </div>
 )
}
