import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Sitelogo  from "../../public/Lucaxfinance.png";
export function Sidebar() {
  return (
    <div  className='absolute z-50 top-0 left-0 h-full w-[236px] flex flex-col bg-gray-800 overflow-y-auto'>


<div className='p-3'>
<Image src={Sitelogo.src} alt="logo"  width={150} height={50}/>
</div>

<Link href='/pool/sas'>Hello</Link>




    </div>
  )
}

