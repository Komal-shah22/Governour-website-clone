
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import Circle from '@/components/Circle/index';

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-[90%] max-w-2xl rounded-md bg-slate-50 p-8 shadow-md'>
        <h1 className='text-main text-center text-4xl font-normal text-[24px] md:text-[40px] pt-4'>
          Before continuing to the application, please subscribe on these social media platforms.
        </h1>
        
        <div className="flex justify-center mt-10">
          <Link href='#'>
            <FaFacebookF className='text-white w-10 h-10 rounded-full bg-blue-800 p-2 hover:scale-110 transition-transform' />
          </Link>
        </div>
        
        <div className="flex justify-center">
          <button className='bg-main bg-opacity-45 text-white w-full max-w-[200px] rounded-md mt-10 p-3 text-center text-sm font-semibold tracking-widest transition-all hover:translate-y-1 sm:py-4 sm:text-base'>
            CONTINUE
          </button>
        </div>
        
        <div className='mt-10 mb-6 text-center'>
          <p className='text-sm'>
            Already applied?{" "}
            <Link className='text-blue-500 font-semibold text-lg underline transition-colors' href='/download '>
              Get Admit Card
            </Link>
          </p>
        </div>
      </div>
      <Circle />
    </div>
  );
};

export default page;
