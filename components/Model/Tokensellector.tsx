
import Popup from 'reactjs-popup';
import React, { FC, ReactNode } from 'react';
import { Tokenlist } from '../TokenList/Tokenlist';
import { CalculatorIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSelectedChange: (newSelected: any) => void;
  tokenlist: any
}


export const Modal: FC<ModalProps> = ({ open, onClose, onSelectedChange, tokenlist }) => (

  <Popup open={open} modal onClose={onClose}>
    {/* header */}
    <div className='flex flex-row  justify-between rounded-t-[19px] px-4 py-4 border-b'>

      <div className='text-lg text-black font-semibold'>
        Select a token

      </div>

      <div className='relative  h-fit'>
        <XMarkIcon onClick={onClose} className="text-gray-900 hover:text-gray-500 font-semibold dark:text-black cursor-pointer relative" width={22} height={22} />
      </div>

    </div>

    {/* header */}

    <div className=' flex flex-col gap-2 pt-3'>
      {tokenlist?.map((data: any, index: any) => {
        return <div className='cursor-pointer' key={index}>

          <div onClick={() => onSelectedChange(index)} className='flex flex-row gap-5 p-3  rounded-3xl hover:bg-slate-100 mb-4'>
            <Image src={`/Token/${data.name}.svg`} width={22} height={22} alt={data.name} />
            <span className='uppercase text-black'>{data.name}</span>
          </div>
        </div>
      })}



    </div>
  </Popup>
);