import Link from 'next/link';
import { CiTwitter, CiFacebook, CiInstagram, CiYoutube } from 'react-icons/ci';

const Socialmedias = ({ position }) => {

    const linksSocialMedia = [
        {icon: <CiTwitter size={20}/>, path: '/'},
        {icon: <CiFacebook size={20}/>, path: '/'},
        {icon: <CiInstagram size={20}/>, path: '/'},
        {icon: <CiYoutube size={20}/>, path: '/'},
    ]

    return (
        <ul className='flex gap-2 md:border-white md:border-r-2 md:pr-3'>
            {linksSocialMedia.map((link, index) => (
                <li key={index}>
                    <Link href={link.path} className='greenLink'>{link.icon}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Socialmedias