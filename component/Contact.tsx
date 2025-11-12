import React from 'react'
import BasicIcons from './BasicIcons'
import { IconsAndLabels } from './BasicIcons';
import ContactForm from './ContactForm';
import ContactFormModal from './ContactFormModal';
import Link from 'next/link';

const Contact = () => {
    const contacts = [
        {
            key: 'location',
            value: 'Fsd / Lhr',
        },
        {
            key: 'phone',
            value: '+92 347 707 5589',
        },
        {
            key: 'email',
            value: 'itsanascode@gmail.com',
        },
        {
            key: 'github',
            value: 'https://github.com/annascodes',
        },
    ]
    return (
        <div className='md:h-svh flex md:flex-row flex-col p-5 '>
            <div className='md:w-1/3 w-full   flex flex-row justify-center items-center'>
                <div className='md:flex items-center gap-2 md:w-sm mx-auto text-5xl hidden   justify-center '>
                    <BasicIcons label='contact' className='text-5xl' />
                    {/* <h1>About</h1> */}
                </div>
            </div>
            <div className='md:w-2/3 w-full    flex flex-col justify-center items-start'>
                <div className='flex items-center gap-2'>
                    <div className='md:hidden '>
                        <BasicIcons label='work' className='text-5xl' />
                    </div>
                    <h1 className='text-5xl mb-2 font-semibold   '>Contact</h1>
                </div>
                <div className='flex flex-col gap-3 mt-5 md:mt-0'>
                    <div className='border-0 flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label={'location'} />
                            <h1>Earth</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BasicIcons label={'email'} />
                            <h1>itsanascode@gmail.com</h1>
                        </div>

                        <div className='flex items-center gap-3'>
                            <BasicIcons label={'phone'} />
                            <Link href={' https://wa.me/923477075889'} target='_blank' className='underline underline-offset-2 hover:text-blue-300 duration-300' >+92 347 707 5889</Link>
                        </div>

                        <div className='flex items-center gap-3'>
                            <BasicIcons label={'github'} />
                            <Link href={'https://github.com/annascodes'} target='_blank' className='underline underline-offset-2 hover:text-blue-300 duration-300' >annascodes</Link>
                        </div>

                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Contact
