import React from 'react'
import Image from 'next/image'
type Props = {
  name: string,
  value:any
}


const ShowingPrice = ({ name, value}: Props) => {


  return (

    <div className='flex flex-row border dark:border-none dark:bg-gray-900 relative h-fit rounded-3xl px-2 py-2 '>

      <div className='' >
        <button className=' bg-white border dark:border-none dark:bg-gray-800 rounded-3xl h-[40px]'>
          <span className='cursor-pointer  rounded-3xl hover:bg-slate-700 uppercase'>
            <div className='flex flex-row gap-x-2 p-2'>
              <Image className='relative' src={`/Token/${name}.svg`} width={22} height={22} alt={name} /> {name}
            </div>
          </span>
        </button>


      </div>


      {/* input  */}
      <input type="text" value={value} disabled={true}  className=" absolute right-2 w-2/5 text-right bg-transparent text-gray-900 text-lg rounded-lg outline-none block  p-2.5  dark:bg-transparent dark:placeholder-gray-400 dark:text-white" placeholder="0" required />


      {/* input  */}

    </div>

  )
}

export default ShowingPrice