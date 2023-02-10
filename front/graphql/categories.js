import { gql } from '@apollo/client';

const GetAllCategories = gql`
    query GetAllCategories {
        categories {
        data {
            id
            attributes {
            background_color
            link
                image_link
                name
            }
        }
        }
    }
  `;

export default GetAllCategories;