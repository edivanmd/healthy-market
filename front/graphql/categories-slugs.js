import { gql } from '@apollo/client';

const GetAllCategoriesSlugsQuery = gql`
    query allCategoriesSlugs {
        categories {
            slug
        }
    }
  `;

export default GetAllCategoriesSlugsQuery;