import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import airtificailintelligence from '../../public/AI.png';
import web3andmetaverse from '../../public/metaverse.png';
import cloudnativecomputing from '../../public/cloudComputing.png'
import ambientcomputing from '../../public/iot.png';
import genomics from '../../public/genomics..png';
import automation from '../../public/automation.png';
const Advance = () => {
  return (
    <>
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] mt-10 m-auto mb-10'>
    <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>
    <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
      <Link href={'/tracks/ai/1'} className='hover:scale-105 duration-200 transition-all'>
      <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
        <div><Image src={airtificailintelligence} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
        <div className='px-4 flex justify-center items-center h-[70px]'>
          <span>Artificial Intelligence</span>

        </div>
      </div>
      </Link>
      <Link href={'tracks/ai/2'} className='hover:scale-105 duration-200 transition-all'>
      <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
        <div><Image src={web3andmetaverse} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
        <div className='px-4 flex justify-center items-center h-[70px]'>
          <span >Web 3 and Metaverse</span>
        </div>
      </div>
      </Link>
      <Link href={'/tracks/ai/3'} className='hover:scale-105 duration-200 transition-all'>
      <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
        <div><Image src={cloudnativecomputing} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
        <div className='px-4 flex justify-center items-center h-[70px]'>
          <span >Cloud-Native Computing</span>
        </div>
      </div>
      </Link>
      <Link href={'/tracks/ai/4'} className='hover:scale-105 duration-200 transition-all'>
      <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
        <div><Image src={ambientcomputing} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
        <div className='px-4 flex justify-center items-center h-[70px]'>
          <span >Ambient Computing and IoT</span>
        </div>
      </div>
      </Link>
      <Link href={'/tracks/ai/5'} className='hover:scale-105 duration-200 transition-all'>
      <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
        <div><Image src={genomics} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
        <div className='px-4 flex justify-center items-center h-[70px]'>
          <span >Genomics and Bioinformatics</span>
        </div>
      </div>
      </Link>
        <Link href={'/tracks/ai/6'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
        <div><Image src={automation} alt='programming fundamental' className='object-cover w-full' height={'300'}/></div>
        <div className='px-4 flex justify-center items-center h-[70px]'>
          <span >Network Programmability and Automation</span>
        </div>
        </div>
        </Link>
      

    </div>

  </div>
  </>

  )
}

export default Advance