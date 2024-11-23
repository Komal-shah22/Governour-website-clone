import React from 'react';
import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram,FaTiktok} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-100 py-8 px-10  text-gray-800 flex justify-around'>
         <div className=' mt-10 mb-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 '>
            <div>
                <h3 className='text-xl font-bold mb-4'>Core Courses</h3>
                <ul className='space-y-2 text-lg'>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Programming Fundamentals</li></Link>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Web2 Using NextJS</li></Link>
                    <Link href="#"><li className='py-1 text-gray-700 text-[17px]'>Earn as You Learn</li></Link>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold mb-4'>Advanced Courses</h3>
                <ul className='space-y-2 text-lg'>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Web 3 and Metaverse</li></Link>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Cloud-Native Computing</li></Link>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Artificial Intelligence (AI) and Deep Learning</li></Link>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Ambient Computing and IoT</li></Link>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Genomics and Bioinformatics</li></Link>
                    <Link href='#'><li className='py-1 text-gray-700 text-[17px]'>Network Programmability and Automation</li></Link>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-bold mb-4'>Social Links</h3>
                <div className='flex space-x-4 mb-4 py-1'>
                <Link href='https://www.facebook.com/TeamKTessori' target='_blank'><FaFacebookF className='text-white w-8 h-8 rounded-full bg-blue-800 p-1'/></Link>
                <Link href='https://www.youtube.com/@KamranTessorikk' target='_blank'><FaYoutube className='text-white w-8 h-8 rounded-full bg-red-600 p-1'/></Link>
                <Link href='#'><FaTwitter className='text-white w-8 h-8 rounded-full bg-blue-400 p-1'/></Link>
                <Link href='https://www.instagram.com/KamranTessoriPk/' target='_blank'><FaInstagram className='instagram text-white w-8 h-8 rounded-full p-1'/></Link>
                <Link href='https://www.tiktok.com/@KamranTessoriPk' target='_blank'><FaTiktok className='text-white w-8 h-8 rounded-full bg-black p-1'/></Link>
                </div>
                <Link href="mailto:education@governoursindh.com" target='_blank' className='text-blue-700 underline flex items-center gap-3'> <AiOutlineMail className='size-6'/>  education@governoursindh.com</Link>
            </div>

         </div>
        </footer>
    </div>
  )
}

export default Footer