import React from 'react'
import { ManuItem } from './config';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
    close?:()=>void
}

export const Manu = ({close}: Props) => {
    const handleClose = ()=>{
        close?.()
    }
    return (
        <ul className='flex flex-col relative pt-5'>
            {ManuItem.map((data, indx) => {
                return <li className='m-2.5' key={indx} onClick={()=>handleClose()} >
                    <div className='px-2 py-2 rounded-xl flex flex-row items-center gap-x-3'>
                        <Image src={data.icon} alt="" width={30} height={30}/>
                        <Link className='text-base capitalize text-center font-semibold' href="/">{data.name}</Link>
                    </div>
                </li>
            })}
        </ul>
    )
}

