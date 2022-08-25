import React from 'react'
import { FaBeer,FaPortrait } from 'react-icons/fa';
import SideButton from './SideButton';

export default function Sidebar() {
  return (
    <div className='flex'>
        <div className='w-[100px] bg-black h-[300px] '>

            <div className='w-[80px]'>
            <SideButton   icon={<FaBeer size={20} /> }></SideButton>
            <SideButton   icon={<FaPortrait size={20} /> }></SideButton>
            </div>
            

        </div>

    </div>
  )
}
