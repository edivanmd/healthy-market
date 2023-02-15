import { gql } from '@apollo/client';

const GetCategoryDetailQuery = gql`
    query GetCategoryDetail($slug: String!) {
        category(where: {slug: $slug}) {
            name
            bgColor{
                hex
            }
            products {
                id
                name
                currentPrice
                oldPrice
                slug
                tag {
                    name
                }
                categories {
                    name
                }
                image {
                    url
                }
            }
        }
    }`;

export default GetCategoryDetailQuery;