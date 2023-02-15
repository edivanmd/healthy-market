import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GetAllProductsSlugsQuery from "../../graphql/products-slugs";
import GetProductDetailQuery from "../../graphql/product-details";
import client from "../../utils/apollo-client";

const ProductDetails = ({ product }) => {
   console.log(product)

   const getContentFragment = (index, text, obj, type) => {
      let modifiedText = text;
  
      if (obj) {
        if (obj.bold) {
          modifiedText = (<b key={index}>{text}</b>);
        }
  
        if (obj.italic) {
          modifiedText = (<em key={index}>{text}</em>);
        }
  
        if (obj.underline) {
          modifiedText = (<u key={index}>{text}</u>);
        }
      }
  
      switch (type) {
        case 'heading-three':
          return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'paragraph':
          return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'heading-four':
          return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'image':
          return (
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          );
        default:
          return modifiedText;
      }
    };

  return (
      <div className='max-w-[1100px] m-auto flex justify-between gap-3 flex-col sm:flex-row py-3 px-5'>
         <Image
            src={product.image.url}
            width={550}
            height={550}
            priority
            alt={product.name}
            className='border border-gray-300 rounded-md h-fit'
         />  
         <div>
            <ul className='flex gap-2'>
               {product.categories.map((category) => (
               <li key={category.name} className='text-[0.95rem] text-basic-green font-bold'>
                  <Link href={`/category/${category.slug}`} className='hover:underline'>
                  {category.name} 
                  </Link>
               </li>
               ))}
            </ul>

            <h3 className='text-3xl font-bold pt-5'>{product.name}</h3>
            <p className='text-gray-400 tracking-tight text-sm pb-5'>{product.smallDescription}</p>
            <div className='flex items-baseline gap-2 pb-5'>
               <p className='text-4xl tracking-tight font-bold'>${product.currentPrice}</p>
               <p className='line-through text-gray-400 text-2xl'>${product.oldPrice}</p>
            </div>

            {product.fullDescription.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
            })}
         </div>
      </div>
  )
}


export async function getStaticPaths() {
   const { data } = await client.query({ query: GetAllProductsSlugsQuery })
   
   return {
      paths: data.products.map((product) => ({ params: { slug: product.slug } })),
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const slug = params.slug;
   const { data } = await client.query({ query: GetProductDetailQuery, variables: {slug}});
   const product = data.product
   return {
      props: {
         product: product,
      },
   };
 }
 
 export default ProductDetails;