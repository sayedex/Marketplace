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
import { Mobile} from '../Sidebar/mobile/Mobile';
import DarkSitelogo  from "../../public/dark.png";
import Bsc from "../../public/ChianId/bsc.svg"



export function Header() {
    const { theme, setTheme } = useTheme(); 
    const [isMounted, setIsMounted] = useState(false);
    const { chain } = useNetwork()
    const { chains, error, isLoading, pendingChainId, switchNetwork } =useSwitchNetwork()
    // const {isRender}=  isMount();



useEffect(() => {
    setIsMounted(true);
  }, []);
  const ChangeToDarkMood = ()=>{
    if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
      }
  }

//now we will need to add popup component for showing manu...





 return (

    <div id="" className='flex flex-col w-full box-border  absolute left-auto z-50 top-0 right-0 bg-[#f8fafc] text-gray-500 dark:text-white dark:bg-slate-900 border-b border-gray-700 rounded-tl-xl' >

<div className='relative flex justify-between items-center min-h-75px px-4 py-6 shadow-none'>


{/* child logo div */}
<div>

<div className='md:hidden'>
<Image className='hidden dark:block' src={Sitelogo.src} alt="logo"  width={150} height={50}/>
<Image className='block dark:hidden' src={DarkSitelogo.src} alt="logo"  width={150} height={50}/>
</div>

{/* <Mobile/> */}
{/* we will show our logo here */}

</div>
{/* child logo div */}


{/* button with chindChange */}

<div className='flex flex-row items-center gap-x-3'>


<div className='hidden md:flex flex-row items-center gap-2 bg-[#fff] border border-gray-200 dark:border-none dark:bg-[#3b3c46] rounded-2xl px-3 py-1 h-9'>

<Image src={Bsc.src} width={20} height={20} alt="chindId" />
<span>BNBChain</span>
</div>


<ExampleButton/>

<div className='md:hidden' ><Mobile/></div>



</div>

{/* button with chindChange */}
</div>
    </div>
 )
}
