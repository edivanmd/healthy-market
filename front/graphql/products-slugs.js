import { gql } from '@apollo/client';

const GetAllProductsSlugsQuery = gql`
    query allProductsSlugs {
        products(last: 1000) {
            slug
        }
    }
  `;

export default GetAllProductsSlugsQuery;