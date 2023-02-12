import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import { RxDotFilled } from 'react-icons/rx';
import { itim } from '../constants/fonts';
import { SmallBanner, Slider } from '.';



const Banner = () => {

  return (
    <div className="bg-banner-pattern bg-auto py-5 border-t-2 border-b-2 border-gray-200">

      <div className='flex flex-col gap-5 sm:flex-row sm:gap-5 px-3 max-w-[1100px] m-auto'>
      
        {/* Slider Banners */}
        <Slider />

        {/* single banner */}
        <SmallBanner />

      </div>

    </div>
  );
}

export default Banner
