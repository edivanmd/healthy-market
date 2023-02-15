import { Banner, Categories, Products } from '../components'

import { QueryVar } from ".";
import GetPopularProductsQuery from "../graphql/products-popular";
import client from "../utils/apollo-client";


export async function getStaticProps() {
  const isPopular = true; 
  const { data } = await client.query({ query: GetPopularProductsQuery, variables: {isPopular}});
  const products = data.products

  return {
     props: { products },
  };
}

export default function Home({products}) {

  return (
    <>
      <main>
        <Banner />
        <Categories />
        <Products title1="Popular" title2="Products" products={products} />
      </main>
    </>
  )
}