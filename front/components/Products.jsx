import { itim } from '../constants/fonts';
import { Product } from "."

const Products = ({ title1, title2, products }) => {

    return (
    <div className="max-w-[1100px] m-auto py-10 px-5">
        {title1 && 
            <h2 className={`${itim.className} text-5xl tracking-tighter`}>{title1} <span className='text-basic-green'>{title2}</span></h2>
        }
        
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5">
            {products.map((product) => (
                <li key={product.id} >
                
                <div className={`
                ${ product.tag.name ? `tag${product.tag.name} prodTag leftTag` : ''} 
                rounded-md hover:shadow-lg hover:shadow-gray-500 shadow-md shadow-gray-300 duration-500 border border-gray-200`} data-ribbon={product.tag.name}
                >
                    <Product product={product} /> 
                </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products