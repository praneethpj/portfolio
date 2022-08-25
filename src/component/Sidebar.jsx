import React from 'react'
import { FaBeer,FaPortrait } from 'react-icons/fa';
import SideButton from './SideButton';

export default function Sidebar() {
  return (
    <div className='flex'>
        <div className='w-[80px] bg-black h-[300px] '>

            <SideButton title="Home" icon={<FaBeer size={20} /> }></SideButton>
            <SideButton title="About" icon={<FaPortrait size={20} /> }></SideButton>

        </div>

    </div>
  )
}
