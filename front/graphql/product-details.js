import { gql } from '@apollo/client';

const GetProductDetailQuery = gql`
query GetProductDetail($slug: String!) {
    product(where: { slug: $slug }) {
        id
        name
        smallDescription
        fullDescription {
            raw
        }
        oldPrice
        currentPrice
        categories {
            name
            slug
        }
        image {
            url
        }
      }
}`;

export default GetProductDetailQuery;