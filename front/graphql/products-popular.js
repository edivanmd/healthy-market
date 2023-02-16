import { gql } from '@apollo/client';

const GetPopularProductsQuery = gql`
    query GetPopularProducts ($isPopular: Boolean!) {
        products(where: { isPopular: $isPopular }, last: 1000, orderBy: name_ASC) {
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
              slug
            }
        }
    }
`;

export default GetPopularProductsQuery;