import { RxArrowRight } from 'react-icons/rx';
import Link from 'next/link';

const BtnArrow = ({ text, link}) => {
  const icon = <RxArrowRight />
  return (
    <Link href={link} className="btnArrow bg-green-400 duration-500 hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded text-basic-blue mt-5 flex items-center float-left gap-2">
        {text} <RxArrowRight className='btnArrowIcon duration-200' />
    </Link>   
  )
}

export default BtnArrow