import { gql } from '@apollo/client';

const GetPopularProductsQuery = gql`
    query GetPopularProducts ($isPopular: Boolean!) {
        products(where: { isPopular: $isPopular }) {
            id
            name
            currentPrice
            oldPrice
            slug
            image {
              url
            }
            tag {
              name
            }
            categories {
              name
            }
        }
    }
`;

export default GetPopularProductsQuery;