import { gql } from '@apollo/client';

const GetAllProductsSlugsQuery = gql`
    query allProductsSlugs {
        products {
            slug
        }
    }
  `;

export default GetAllProductsSlugsQuery;