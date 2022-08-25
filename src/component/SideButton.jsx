import React from 'react'
import { FaBeer } from 'react-icons/fa';

export default function SideButton({title,icon}) {
  return (
   
    <div className='flex flex-row ml-0 mt-5 mb-5 justify-evenly group content-center cursor-pointer'>

    <div className='none group-hover:bg-gray-500 h-[50px] w-1 space-x-3'>

    </div>

    <div className='text-cyan-50 ml-1'>
    <div className='bg-gray-700/80 content-center rounded-full group-hover:rounded-2xl group-hover:bg-green-500 p-6'>
      {icon}
      
    </div>
    <div className=''>
    {title}
    </div>
    </div>

</div>
  )
}
