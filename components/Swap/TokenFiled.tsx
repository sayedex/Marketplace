import React from 'react'
import Image from 'next/image'
type Props = {
  name: string,
  OpenModel: () => void;
  handleTokenvalueChange: (value: any) => void;
  model:boolean

}


const TokenFiled = ({ name, OpenModel, handleTokenvalueChange,model}: Props) => {
  const HandleChange = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue && /^\d+(\.\d{1,7})?$/.test(inputValue)) {
      // Check if the input value is a valid positive number
      handleTokenvalueChange(inputValue);
    } else {
      // Handle invalid input (e.g., show an error message, reset the input value, etc.)
      console.log('Invalid input value:', inputValue);
    }
  }

const CallTokenList = ()=>{
  if(model){
    OpenModel()
  }


}


  return (

    <div className='flex flex-row border bg-white dark:border-none dark:bg-gray-900 relative h-fit rounded-3xl px-2 py-2 '>

      <div className='' onClick={()=>CallTokenList()}>
        <button className=' bg-white border dark:border-none dark:bg-gray-800 rounded-3xl h-[40px]'>
          <span className='cursor-pointer  rounded-3xl hover:bg-slate-700 uppercase'>
            <div className='flex flex-row gap-x-2 p-2'>
              <Image className='relative' src={`/Token/${name}.svg`} width={22} height={22} alt={name} /> {name}
            </div>
          </span>
        </button>


      </div>


      {/* input  */}
      <input type="text"  onChange={(e) => HandleChange(e)} className=" absolute right-2 w-2/5 text-right bg-transparent text-gray-900 text-lg rounded-lg outline-none block  p-2.5  dark:bg-transparent dark:placeholder-gray-400 dark:text-white" placeholder="0" required />


      {/* input  */}

    </div>

  )
}

export default TokenFiled