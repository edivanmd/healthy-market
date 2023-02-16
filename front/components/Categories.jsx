import Link from 'next/link';
import Image from 'next/image';
import { itim } from '../constants/fonts';

import { Query } from ".";
import GetAllCategoriesQuery from "../graphql/categories";

const categories = () => {
 
  return (
    <div className='max-w-[1100px] m-auto py-16 px-5 border-b-4'>
        <h2 className={`${itim.className} text-basic-blue text-5xl tracking-tighter`}>Shop <span className='text-basic-green'>by categories</span></h2>
        <ul className='flex flex-wrap max-w-[1100px] m-auto justify-center gap-10 pt-5'>
            
        <Query query={GetAllCategoriesQuery}>
            {({data:allCategories}) => {
                const coder = allCategories.categories
                return(
                    <>
                    {coder.map((category) => (
                        <li key={category.id} style={{ backgroundColor: `${category.bgColor.hex}` }} className='hover:shadow-md hover:shadow-gray-500 shadow-md shadow-gray-300 duration-500 w-24 h-24 rounded-lg flex items-center'>
                        <Link href={`/category/${category.slug}`} className='w-full text-center flex flex-col align-middle'>
                            <Image
                                src={category.imageLink}
                                width={45}
                                height={45}
                                alt={category.name}
                                className="m-auto"
                            />
                            <p className='font-bold text-xs text-white'>{category.name}</p>
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