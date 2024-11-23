import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import programmingFundamentals from '../../public/programming_fundamentals.png';
import web2usingnextjs from '../../public/web2 using nextjs.png' ;
import Earnasyoulearn from '../../public/earn_as_your_learn.png';

const Compulsary = () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] mt-10 m-auto mb-10'>
      <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>
      <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
        <Link href={'/compulsary/1'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
          <div><Image src={programmingFundamentals} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
          <div className='px-4 flex justify-center items-center h-[70px]'>
            <text >Programming Fundamental</text>
          </div>
        </div>
        </Link>
        <Link href={'/compulsary/2'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
          <div><Image src={web2usingnextjs} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
          <div className='px-4 flex justify-center items-center h-[70px]'>
            <text >Programming Fundamental</text>
          </div>
        </div>
        </Link>
        <Link href={'/compulsary/3'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
          <div><Image src={Earnasyoulearn} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
          <div className='px-4 flex justify-center items-center h-[70px]'>
            <text >Programming Fundamental</text>
          </div>
        </div>
        </Link>

      </div>

    </div>
  )
}

export default Compulsary