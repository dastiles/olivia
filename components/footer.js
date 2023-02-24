import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-black '>
            <div className='w-[90vw] md:w-[70vw] mx-auto py-5 block lg:flex gap-5 lg:border-b lg:border-gray-700 '>
                <div className='mt-5 '>
                    <div className='flex gap-5 border-b border-gray-700 pb-5'>
                        <AiOutlineMail className='text-yellow-600 text-4xl' />
                        <div>
                            <p className="text-gray-700 text-[0.7em]">Email us</p>
                            <p className='text-white'>Dastilesforever@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-5 border-b border-gray-700 pb-5 mt-5'>
                        <FiPhoneCall className='text-yellow-600 text-4xl' />
                        <div>
                            <p className="text-gray-700 text-[0.7em]">Call us</p>
                            <p className='text-white'>+263771315239</p>
                        </div>
                    </div>

                </div>
                <div className='py-5 lg:flex-grow lg:border-r border-gray-700 lg:pr-5 lg:border-l lg:pl-5'>
                    <h1 className='text-white text-md font-semibold text-center'>Sign up to Olivia NewsLetter</h1>
                    <input type='email' placeholder='Email Address' className='w-full outline-none border-none bg-white py-2 my-5' />
                    <button className='block bg-yellow-600 text-white outline-none border-none w-full py-2'>Submit</button>
                </div>
                <div className='py-5'>
                    <h1 className='text-white text-md font-semibold text-center'>FOLLOW US ON</h1>
                    <div className='flex items-center justify-between py-5'>
                        <div className='bg-white h-[30px] w-[30px] pt-[1px] pl-[0.5px] pr-[0.5px] rounded-full overflow-hidden flex items-center justify-center place-content-center'>
                            <div className='bg-black h-[25px] w-[25px] rounded-full overflow-hidden flex items-center justify-center place-content-center'>
                                <FaFacebookF color='white' />
                            </div>
                        </div>
                        <div className='bg-white h-[30px] w-[30px] pt-[1px] pl-[0.5px] pr-[0.5px] rounded-full overflow-hidden flex items-center justify-center place-content-center'>
                            <div className='bg-black h-[25px] w-[25px] rounded-full overflow-hidden flex items-center justify-center place-content-center'>
                                <FaTwitter color='white' />
                            </div>
                        </div>
                        <div className='bg-white h-[30px] w-[30px] pt-[1px] pl-[0.5px] pr-[0.5px] rounded-full overflow-hidden flex items-center justify-center place-content-center'>
                            <div className='bg-black h-[25px] w-[25px] rounded-full overflow-hidden flex items-center justify-center place-content-center'>
                                <FaLinkedinIn color='white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='w-[90vw] md:w-[70vw] mx-auto py-5 flex items-center justify-between'>
                <p className="text-gray-700 text-[0.7em]">&copy; 2023 Stiles tech</p>
                <p className="text-gray-700 text-[0.7em]">Developed by Charles Madhuku (stiles)</p>
                <p className="text-gray-700 text-[0.7em]">All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer