import Image from 'next/image';
import Link from 'next/link';
import { Products } from '../../components'

import GetAllCategoriesSlugsQuery from "../../graphql/categories-slugs";
import GetCategoryDetailQuery from "../../graphql/category-details";
import client from "../../utils/apollo-client";

const CategoryDetails = ({ category }) => {
  
    const catColor = category.bgColor.hex
    const catColorStyle = {"--background": catColor}
    
    return (
    <div className='max-w-[1100px] m-auto flex flex-col justify-between gap-3 py-3 px-5'>
        <div className='py-5'>
            <h4 className='text-xl font-bold text-basic-blue right-0'>Category:</h4>
            <h3 className={`catColorTitle text-5xl sm:text-7xl font-bold text-basic-green before:block before:absolute before:-inset-1 before:-skew-y-3 relative inline-block px-5 py-2`} style={catColorStyle}> <span className="relative text-white">{category.name}</span></h3>
        </div>

        <Products products={category.products} />

    </div>
  )
}

export async function getStaticPaths() {
    const { data } = await client.query({ query: GetAllCategoriesSlugsQuery })
    
    return {
       paths: data.categories.map((category) => ({ params: { slug: category.slug } })),
       fallback: false,
    };
 }
 
 export async function getStaticProps({ params }) {
    const slug = params.slug;
    const { data } = await client.query({ query: GetCategoryDetailQuery, variables: {slug}});
    const category = data.category
    return {
       props: {
          category: category,
       }, revalidate: 10,
    };
  }


export default CategoryDetails;