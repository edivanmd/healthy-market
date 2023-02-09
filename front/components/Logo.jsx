'use client'

import { solitreo } from '../constants/fonts';

const Logo = () => {
  return (
    <h1 className={`${solitreo.className} flex flex-col bg-gradient-to-b from-white to-green-50 p-2 w-26 sm:w-44`} >
        {/* <span className='text-xl text-left leading-tight sm:text-4xl'>Your</span> */}
        <span className='tracking-tight w-fit text-basic-green font-bold text-3xl sm:text-5xl self-center'>Healthy</span>
        <span className='text-xl text-left leading-tight sm:text-4xl self-end'>Market</span>
    </h1>
  )
}

export default Logo