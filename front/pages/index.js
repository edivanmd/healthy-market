import { Banner, Categories, Products } from '../components'

import { QueryVar } from ".";
import GetPopularProductsQuery from "../graphql/products-popular";
import client from "../utils/apollo-client";

// export async function getServerSideProps() {
//   const isPopular = true; 
//   const { data } = await client.query({ query: GetPopularProductsQuery, variables: {isPopular}});
//   const products = data.products

//   // Pass data to the page via props
//   return { props: { products, } }
// }


export async function getStaticProps() {
  const isPopular = true; 
  const { data } = await client.query({ query: GetPopularProductsQuery, variables: {isPopular}});
  const products = data.products

  return {
     props: { 
      products,
    }, revalidate: 10,
  }
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