import Link from 'next/link'
import React from 'react'
import BasicIcons from '../BasicIcons'

const NavLinks = () => {
    return (
        <>
            <li className='md:mx-5'>
                <a href='#home' className='flex items-center gap-2'>
                    <BasicIcons label='home' className='text-2xl' />
                    <span className='block md:hidden'>Home</span>
                </a>
            </li>
            <li className='md:mx-5'>
                {/* <Link href={''}> <BasicIcons label='about' className='text-2xl' /> </Link> */}
                <a href='#about' className='flex items-center gap-2'>
                    <BasicIcons label='about' className='text-2xl' />
                    <span className='block md:hidden'>About</span>
                </a>
            </li>
            {/* <li className='md:mx-5'>
                <a href='#work' className='flex items-center gap-2'>
                    <BasicIcons label='work' className='text-2xl' />
                    <span className='block md:hidden'>Work</span>
                </a>

            </li> */}

            <li className='md:mx-5'>
                <a href='#contact' className='flex items-center gap-2'>
                    <BasicIcons label='contact' className='text-2xl' />
                    <span className='block md:hidden'>Contact</span>
                </a>
            </li>
            <li className='md:mx-5 overflow-hidden '>
                <a href='#liveProjects' className='flex items-center gap-2'>
                    <BasicIcons label='dot' className='text-2xl text-yellow-300 animate-ping' />
                    <span className='block md:hidden'>Live Projects</span>
                </a>
            </li>
            {/* <li>
                <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li> */}

        </>
    )
}

export default NavLinks
