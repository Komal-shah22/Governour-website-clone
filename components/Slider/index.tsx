'use client'
import { Component, ReactNode } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image1 from '../../public/4th.png';
import Image2 from '../../public/5th.png';
import Image3 from '../../public/6th.png';
import Image4 from '../../public/7th.png';
import Image5 from '../../public/8th.png';
import Image6 from '../../public/9th.png';
import Image7 from '../../public/10th.png';
import Image8 from '../../public/11th.png';
import Image from 'next/image';

export default class ImagesCaurosel extends Component{
     render():ReactNode{
        const data =[
        {
          img:Image1,
          tital:'student learning web3 basics'
        },
        {
          img:Image2,
          tital:'student learning web3 basics'
    
        },
        {
          img:Image3,
          tital:'student learning web3 basics'
    
        },
        {
          img:Image4,
          tital:'student learning web3 basics'
    
        },
        {
          img:Image5,
          tital:'student learning web3 basics'
    
        },
        {
          img:Image6,
          tital:'student learning web3 basics'
    
        },
        {
          img:Image7,
          tital:'student learning web3 basics'
    
        },
        {
          img:Image8,
          tital:'presidential launching the PIAIC website'
    
        },
        ];
        const settings = {
            dots:true,
            dotsClass:'slick-dots line-indicator',
            infinite:true,
            speed:500,
            slidesToShow:2,
            sliderToscroll:2,
            arrows:false,
            autoplay:true,
            responsive:[
            {
              breakpoint:1100,
              settings:{
                    slidesToShow:1,
                    slideToScroll:1,
                    infinite:true,
                    dots:true,
                }
            }
            ],
            customPaging:(f:number)=>(
                <div className='mt-2 text-xs opacity-0'>{f}</div>
            ),
        };
        return (
            <div className='mt-10 w-full'>
                <Slider {...settings} className="w-full">
                    {
                        data.map((val, index)=>{
                            return(
                                <div className='px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none'key={index}>
                                    <div className='relative bg-slate-900 rounded-lg overflow-hidden'>
                                        <Image src={val.img} alt={val.tital} className='w-full h-[300px] md:h-[600px] object-cover'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
     }
}