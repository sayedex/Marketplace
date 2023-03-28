import React from 'react'
import { useTheme } from "next-themes"
type Props = {}

export const Mood = () => {
  const { theme, setTheme } = useTheme();


  const ChangeToDarkMood = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }


  return (
    <div className='flex flex-row items-center justify-between px-5 py-5 mb-3'>
      {/* text */}
      <div>
        Verstion 1
      </div>
      {/* text */}
      {/* icon */}
      <div>

      </div>
      {/* icon */}

      <div className=''>
        <button onClick={() => ChangeToDarkMood()} className='flex bg-[#ffffffa3] flex-row p-[2px] rounded-lg gap-x-2 bg-[rgb(240, 240, 240)] '>
          <div className={`${theme == "light" ? "text-[#ffbf00] bg-white" : "text-[#545351]"} rounded-md p-1`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-hKMtZM dJNXld MuiBox-root" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43726 4.49988V3.37488C8.43726 3.0655 8.69038 2.81238 8.99976 2.81238C9.30913 2.81238 9.56226 3.0655 9.56226 3.37488V4.49988C9.56226 4.80925 9.30913 5.06238 8.99976 5.06238C8.69038 5.06238 8.43726 4.80925 8.43726 4.49988ZM8.99976 11.8124C7.44726 11.8124 6.18726 10.5524 6.18726 8.99988C6.18726 7.44738 7.44726 6.18738 8.99976 6.18738C10.5523 6.18738 11.8123 7.44738 11.8123 8.99988C11.8123 10.5524 10.5523 11.8124 8.99976 11.8124ZM4.49976 9.56238H3.37476C3.06538 9.56238 2.81226 9.30925 2.81226 8.99988C2.81226 8.6905 3.06538 8.43738 3.37476 8.43738H4.49976C4.80913 8.43738 5.06226 8.6905 5.06226 8.99988C5.06226 9.30925 4.80913 9.56238 4.49976 9.56238ZM13.4998 9.56238H14.6248C14.9341 9.56238 15.1873 9.30925 15.1873 8.99988C15.1873 8.6905 14.9341 8.43738 14.6248 8.43738H13.4998C13.1904 8.43738 12.9373 8.6905 12.9373 8.99988C12.9373 9.30925 13.1904 9.56238 13.4998 9.56238ZM8.43726 13.4999V14.6249C8.43726 14.9343 8.69038 15.1874 8.99976 15.1874C9.30913 15.1874 9.56226 14.9343 9.56226 14.6249V13.4999C9.56226 13.1905 9.30913 12.9374 8.99976 12.9374C8.69038 12.9374 8.43726 13.1905 8.43726 13.4999ZM4.82601 4.82613C5.03976 4.60675 5.39976 4.60675 5.61913 4.82613L6.21538 5.42238C6.43476 5.63613 6.42913 5.99613 6.21538 6.2155C6.00163 6.43488 5.64163 6.43488 5.42226 6.2155L4.82601 5.61925C4.60663 5.4055 4.60663 5.0455 4.82601 4.82613ZM12.5773 11.7843C12.3579 11.5649 11.9979 11.5649 11.7841 11.7843C11.5648 12.0036 11.5648 12.3636 11.7841 12.5774L12.3804 13.1736C12.5998 13.393 12.9598 13.393 13.1735 13.1736C13.3929 12.9543 13.3929 12.5943 13.1735 12.3805L12.5773 11.7843ZM13.1735 4.82613C13.3929 5.03988 13.3929 5.39988 13.1735 5.61925L12.5773 6.2155C12.3635 6.43488 12.0035 6.42925 11.7841 6.2155C11.5648 6.00175 11.5648 5.64175 11.7841 5.42238L12.3804 4.82613C12.5941 4.60675 12.9541 4.60675 13.1735 4.82613ZM6.21538 12.5774C6.43476 12.358 6.43476 11.998 6.21538 11.7843C5.99601 11.5649 5.63601 11.5649 5.42226 11.7843L4.82601 12.3805C4.60663 12.5999 4.60663 12.9599 4.82601 13.1736C5.04538 13.3874 5.40538 13.393 5.61913 13.1736L6.21538 12.5774Z" fill="currentColor"></path></svg>
          </div>

          <div className={`${theme == "dark" ? "text-[#ffbf00] bg-white" : "text-[#545351]"} rounded-md p-1`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-hKMtZM dJNXld MuiBox-root" ><path fill-rule="evenodd" clip-rule="evenodd" d="M3.93726 8.99988C3.93726 6.20425 6.20413 3.93738 8.99976 3.93738C9.25851 3.93738 9.51726 3.95988 9.76476 3.99363C8.99413 4.54488 8.49351 5.4505 8.49351 6.46863C8.49351 8.14488 9.85476 9.50613 11.531 9.50613C12.5548 9.50613 13.4548 9.0055 14.006 8.23488C14.0398 8.48238 14.0623 8.74113 14.0623 8.99988C14.0623 11.7955 11.7954 14.0624 8.99976 14.0624C6.20413 14.0624 3.93726 11.7955 3.93726 8.99988Z" fill="currentColor"></path></svg>

          </div>
        </button>
      </div>
    </div>
  )
}
