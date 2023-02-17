import Link from 'next/link';
import { useState } from 'react';
import { SocialMedias } from '.';
import { RiCloseCircleFill, RiMenu2Fill } from 'react-icons/ri';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const navLinks = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Our Team', path: '/our-team'},
        // {name: 'Shop', path: '/shop'},
        // {name: 'Contact', path: '/contact'},
    ]

    const handleNavbar = () => { setNav(!nav); }

  return (
    <nav className='w-full bg-slate-300 py-1'>
        
        <div className='max-w-[1100px] m-auto flex justify-between items-center px-5'>
            
            <ul className='text-sm font-normal divide-x-2 divide-white hidden sm:flex'>
                {navLinks.map((link, index) => (
                    <li key={index} className='px-5 py-2 first:pl-0 font-semibold'>
                    <Link href={link.path} className='greenLink'>{link.name}</Link>
                </li>
                ))}
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNavbar} className='block sm:hidden z-50 cursor-pointer hover:text-basic-green'>
                {nav ? <RiCloseCircleFill size={40} className="text-basic-white hover:text-blue duration-300 fixed" /> : <RiMenu2Fill size={40} className="text-basic-blue hover:text-basic-green duration-300" />}
            </div>

            {/* Mobile Menu */}
            <div className={ `sm:hidden text-center fixed z-40 inset-0 w-full h-screen bg-basic-green bg-opacity-90 ease-in duration-300 flex justify-center items-center 
                ${nav
                    ? 'left-[0%]'
                    : '-left-[100%]'
                  }`
            }>
                <ul>
                    {navLinks.map((link, index) => (
                    <li onClick={handleNavbar} key={index} className='p-4 duration-300 text-white hover:text-basic-blue text-4xl'>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>

            <div className='flex items-center gap-3 justify-between'>
                <SocialMedias />
            </div>

        </div>
    </nav>
  )
}

export default Navbar