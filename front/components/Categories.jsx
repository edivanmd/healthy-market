import Link from 'next/link';
import Image from 'next/image';
import { itim } from '../constants/fonts';

import { Query } from ".";
import GetAllCategories from "../graphql/categories";

const categories = () => {
 
  return (
    <div className='max-w-[1100px] m-auto py-10 px-5'>
        <h2 className={`${itim.className} text-basic-blue text-5xl tracking-tighter`}>Shop <span className='text-basic-green'>by categories</span></h2>
        <ul className='flex flex-wrap max-w-[1100px] m-auto justify-center gap-10 pt-5'>
            
        <Query query={GetAllCategories}>
            {({data:allCategories}) => {
                const coder = allCategories.categories.data
        
                return(
                    <>
                    {coder.map((category) => (
                        <li key={category.id} style={{ backgroundColor: `${category.attributes.background_color}` }} className='hover:shadow-md hover:shadow-gray-500 shadow-md shadow-gray-300 duration-500 w-24 h-24 rounded-lg flex items-center'>
                        <Link href={category.attributes.link} className='w-full text-center flex flex-col align-middle'>
                            <Image
                                src={category.attributes.image_link}
                                width={45}
                                height={45}
                                alt={category.attributes.name}
                                className="m-auto"
                            />
                            <p className='font-bold text-xs'>{category.attributes.name}</p>
                        </Link>
                        </li>
                    ))}
                    </>
                )
            }}
        </Query>

        </ul>
    </div>
  )
}

export default categories