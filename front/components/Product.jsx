import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ product }) => {

  return (
      <div className='p-2'>
          <p>
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.image.url}
                width={270}
                height={270}
                priority
                alt={product.name}
                className='m-auto w-[270px]'
              />  
            </Link>
          </p>

          <ul className='flex gap-2'>
            {product.categories.map((category) => (
              <li key={category.name} className='text-[0.65rem] text-basic-green font-bold'>
                <Link href={`/category/${category.slug}`} className='hover:underline'>
                 {category.name} 
                </Link>
              </li>
              ))}
          </ul>

          <p className='text-base tracking-normal font-bold my-2'>{product.name}</p>
          
          <div className='flex flex-col min-[500px]:flex-row'>
            <div className='flex w-full items-baseline gap-2'>
                <p className='text-lg tracking-tight'>${product.currentPrice} </p>
                <p className='line-through text-gray-400 text-sm'>${product.oldPrice} </p>
            </div>
            <Link href={`/product/${product.slug}`} className="bg-green-400 duration-500 hover:bg-green-900 hover:text-white font-bold py-2 px-4 text-sm rounded w-auto self-end">
                Buy
            </Link>   
          </div>

      </div>
  )
}

export default Product