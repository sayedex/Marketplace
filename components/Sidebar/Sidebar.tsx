import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Sitelogo  from "../../public/Lucaxfinance.png";
import DarkSitelogo  from "../../public/dark.png";
import { Manu } from './Manu';
import { Social } from './social/Social';
import { Additional } from './additional/Additional';
import {Mood} from './mood/Mood';
import { Linkmanu } from './Linkmanu/Linkmanu';


export function Sidebar() {

  return (
    <div  className='absolute z-50  bottom-0 right-0 md:top-0 left-0 h-full w-[236px] flex flex-col bg-slate-100 dark:bg-gray-800 overflow-y-auto'>


<div className='p-5'>
<Image className='hidden dark:block' src={Sitelogo.src} alt="logo"  width={150} height={50}/>
<Image className='block dark:hidden' src={DarkSitelogo.src} alt="logo"  width={150} height={50}/>
</div>

<div>
  <Manu/>
</div>

<div className='pt-5  flex-1 px-5'>
  <Linkmanu/>
</div>
<div className='pt-5 px-5'>
  <Additional/>
</div>
<div className='pt-5 '>
  <Social/>
</div>
<div>
  <Mood/>
</div>

    </div>
  )
}

