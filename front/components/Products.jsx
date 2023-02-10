import Link from "next/link";
import { itim } from '../constants/fonts';
import { Product } from "."

import {Query} from ".";
import GetAllProducts from "../graphql/products";

const Products = ({ title1, title2 }) => {
  return (
    <div className="max-w-[1100px] m-auto py-10 px-5">
        {title1 && 
            <h2 className={`${itim.className} text-5xl tracking-tighter`}>{title1} <span className='text-basic-green'>{title2}</span></h2>
        }
        
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5">
            <Query query={GetAllProducts}>
                {({data:allProducts}) => {
                    const coder = allProducts.products.data
                    
                    return(
                        <>
                        {coder.map((product) => (
                            <li key={product.id} className={`
                            ${ product.attributes.tag && `tag${product.attributes.tag} prodTag leftTag`} 
                            rounded-md hover:shadow-lg hover:shadow-gray-500 shadow-md shadow-gray-300 duration-500 border border-gray-200`} data-ribbon={product.attributes.tag}
                            >

                                {/* <Link href={product.attributes.link}> */}
                                    <Product product={product} /> 
                                {/* </Link>    */}

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

export default Products