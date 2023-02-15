import { gql } from '@apollo/client';

const GetAllCategoriesQuery = gql`
    query GetAllCategories {
        categories {
            id
            name
            slug
            bgColor {
                hex
            }
            imageLink
        }
    }
  `;

export default GetAllCategoriesQuery;