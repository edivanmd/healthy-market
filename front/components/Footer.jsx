import { TextAndIcon, Logo, SocialMedias } from '.';
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='border-t-2 border-slate-300 py-10'>
        <ul className='max-w-[1100px] m-auto px-5 flex flex-col sm:flex-row gap-5 items-center justify-around'>
            <li>
              <SocialMedias />
            </li>

            <li>
                <ul className='flex flex-col gap-3 items-center'>
                    <li><TextAndIcon text='(406) 555-0122' icon={<HiOutlinePhone color={'green'} size={20}/>} /></li>
                    <li><TextAndIcon text='12 George Street, Sydney.' icon={<HiOutlineLocationMarker color={'green'} size={20}/>} /></li>
                </ul>
            </li>

            <li>
              <ul className='flex flex-col gap-3 items-center'>
                <li><TextAndIcon text='Mon - Friday | 8:00 - 17:00' icon={<HiOutlineClock color={'green'} size={20}/>} /></li>
                <li><TextAndIcon text='contact@healthymarket.com' icon={<HiOutlineMail color={'green'} size={20} />} /></li>
              </ul>
            </li>
        </ul>
    </div>
  )
}

export default Footer;