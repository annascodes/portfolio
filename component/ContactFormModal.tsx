'use client'
import React from 'react'
import ContactForm from './ContactForm';
import BasicIcons from './BasicIcons';

const ContactFormModal = ({ onlyIcon = false }: { onlyIcon?: boolean }) => {
    const modalId = `ContactFormModal`
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className={`btn  tracking-widest btn-outline text-xs flex items-center gap-2 border-yellow-300 ${onlyIcon ? 'border-none' : 'btn-xl' } `}
                onClick={() => {
                    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
                    modal?.showModal()
                }}>

                <BasicIcons label='hand' className='text-xl text-yellow-300' />
                {!onlyIcon && 'Say hi to Anas'}

            </button>
            <dialog id={modalId} className="modal">
                <div className="modal-box">
                    <h1 className='mb-5 font-bold flex items-center gap-2'>  <BasicIcons label='hand' className='text-xl text-yellow-300' /> Say hi to Anas</h1>
                    <ContactForm />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default ContactFormModal
