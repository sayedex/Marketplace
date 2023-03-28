import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Additional } from '../additional/Additional';
import { Social } from '../social/Social';
import { Manu } from '../Manu';
import { Mood } from '../mood/Mood';
export const Mobile = () => {
    return (
        <div>
            <Popover>
                {({ open, close }) => (
                    /* Use the `open` state to conditionally change the direction of the chevron icon. */
                    <>
                        <Popover.Button className='border-none'>
                            {/* {open ? "close" : "open"} */}

                            <div className='cursor-pointer p-2 hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                            </svg>

                        </div>

                        </Popover.Button>


                        <Popover.Panel className="fixed overflow-y-auto left-1/2 z-10 flex flex-col mt-3 w-screen bg-white h-screen dark:bg-slate-900 -translate-x-1/2 transform px-4 ">
                            {/* all manu.. */}
                                <Manu close={()=>close()} />
                             <div className=''>
                             <Additional close={()=>close()} />
                             </div>
                              
                     <div className='flex-1 items-end pt-[10rem]'>  
           
                     <div className='py-4 '> <Social close={()=>close()}/></div>
                     <Mood/>
                     </div>
                 
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </div>
    )
}

