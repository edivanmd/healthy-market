import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ product }) => {
  const categories = product.attributes.categories.data

  return (
      <div className='p-2'>
          <p className=''>
            <Link href={`/product/${product.attributes.name}`}>
              <Image
                src={product.attributes.image.data.attributes.url}
                width={270}
                height={270}
                priority
                alt={product.attributes.name}
                className='m-auto w-[270px]'
              />  
            </Link>
          </p>

          <ul className='flex gap-2'>
            {categories.map((category) => (
              <li key={category.id} className='text-[0.65rem] text-basic-green font-bold'>
                <Link href={category.attributes.link} className='hover:underline'>
                 {category.attributes.name} 
                </Link>
              </li>
              ))}
          </ul>

          <p className='text-base tracking-normal font-bold my-2'>{product.attributes.name}</p>
          
          <div className='flex flex-col min-[500px]:flex-row'>
            <div className='flex w-full items-baseline gap-2'>
                <p className='text-lg tracking-tight font-bold'>${product.attributes.price} </p>
                <p className='line-through text-gray-400 text-sm'>${product.attributes.old_price} </p>
            </div>
            <Link href={`/product/${product.attributes.name}`} className="bg-green-400 duration-500 hover:bg-green-900 hover:text-white font-bold py-2 px-4 text-sm rounded w-auto self-end">
                Buy
            </Link>   
          </div>

      </div>
  )
}

export default Product