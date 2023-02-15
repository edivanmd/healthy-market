// import { BsCart4, BsHeart, BsPerson } from 'react-icons/bs';
import { Logo, Navbar } from './'
// import Link from 'next/link';

const Header = () => {
  return (
    <header className='sm:pt-5'>
      <div className='flex justify-between items-center py-3 max-w-[1100px] m-auto px-5'>

        <Logo />

        {/* <ul className='flex flex-col gap-5 sm:flex-row'>
          <li className='self-end'>
            <Link href='/' className='greenLink'>
              <p className='rounded-full w-4 h-4 bg-basic-green text-white text-center font-normal relative text-[0.65rem] -top-3 -right-9'>5</p>
              <BsCart4 fontSize={22} /> Cart
            </Link>
          </li>
          <li>
            <Link href='/' className='greenLink'>
              <p className='rounded-full w-4 h-4 bg-basic-green text-white text-center font-normal relative text-[0.65rem] -top-3 -right-9'>3</p>
              <BsHeart fontSize={22} /> Wishlist
            </Link>
          </li>
        </ul> */}
      </div>

      <Navbar />
    </header>
  )
}

export default Header