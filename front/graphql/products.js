import { gql } from '@apollo/client';

const GetAllProductsQuery = gql`
    query GetAllProducts {
        products {
            id
            name
            currentPrice
            oldPrice
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

export default GetAllProductsQuery;