import { Textandicon, Logo, Socialmedias } from '.';
import { CiPhone, CiLocationOn, CiClock2, CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className='border-t-2 border-slate-300 py-10'>
        <ul className='max-w-[1100px] m-auto px-5 flex flex-col sm:flex-row gap-5 items-center justify-around'>
            <li>
              <Socialmedias />
            </li>

            <li>
                <ul className='flex flex-col gap-3 items-center'>
                    <li><Textandicon text='(406) 555-0122' icon={<CiPhone color={'green'} size={20}/>} /></li>
                    <li><Textandicon text='12 George Street, Sydney.' icon={<CiPhone color={'green'} size={20}/>} /></li>
                </ul>
            </li>

            <li>
              <ul className='flex flex-col gap-3 items-center'>
                <li><Textandicon text='Mon - Friday | 8:00 - 17:00' icon={<CiPhone color={'green'} size={20}/>} /></li>
                <li><Textandicon text='contact@healthymarket.com' icon={<CiPhone color={'green'} size={20} />} /></li>
              </ul>
            </li>
        </ul>
    </div>
  )
}

export default Footer