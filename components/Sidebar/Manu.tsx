import React from 'react'
import { ManuItem } from '../../config/Manu/config';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
type Props = {
    close?:()=>void
}

export const Manu = ({close}: Props) => {
    const router = useRouter();
    console.log(router.pathname);
    
    const handleClose = ()=>{
        close?.()
    }
    return (
        <ul className='flex flex-col relative pt-5'>
            {ManuItem.map((data, indx) => {
                        const isActive = router.pathname === data.link;
                return <li className='m-2' key={indx} onClick={()=>handleClose()} >
                    <div className={`${isActive?"bg-[#b3accd] text-white":""} px-2 py-2 rounded-xl flex flex-row items-center gap-x-3`}>
                        <Image src={data.icon} alt="" width={30} height={30}/>
                        <Link className='text-base capitalize text-center font-semibold' href="/">{data.name}</Link>
                    </div>
                </li>
            })}
        </ul>
    )
}

