import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Sitelogo  from "../../public/Lucaxfinance.png";
import { Manu } from './Manu';
import { Social } from './social/Social';
import { Additional } from './additional/Additional';
import {Mood} from './mood/Mood'
export function Sidebar() {
  return (
    <div  className='absolute z-50  bottom-0 right-0 md:top-0 left-0 h-full w-[236px] flex flex-col bg-slate-100 dark:bg-gray-800 overflow-y-auto'>


<div className='p-5'>
<Image src={Sitelogo.src} alt="logo"  width={150} height={50}/>
</div>

<div>
  <Manu/>
</div>
<div className='flex-1 px-5'>
  <Additional/>
</div>
<div>
  <Social/>
</div>
<div>
  <Mood/>
</div>

    </div>
  )
}

