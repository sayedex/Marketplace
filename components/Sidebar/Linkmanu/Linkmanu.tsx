import React from 'react'
import { LinkmanuItem } from "./config";
import Link from 'next/link';
type Props = {
    close?: () => void
}
export const Linkmanu = ({ close }: Props) => {
    const handleClose = () => {
        close?.()
    }
    return (

        <ul className='flex flex-col gap-5 pt-5 border-t border-t-gray-700'>
            {LinkmanuItem.map((data, index) => {
                return <li className='' onClick={() => handleClose()}>
                   <Link className='flex flex-row gap-x-3 items-center' href={data.link}><data.icon className='text-start w-[30px] text-[23px]' width={23} height={23}></data.icon><span className='col-span-1'>{data.name}</span></Link>
                </li>
            })}

        </ul>

    )

        }