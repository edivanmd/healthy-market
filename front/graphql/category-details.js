import { gql } from '@apollo/client';

const GetCategoryDetailQuery = gql`
    query GetCategoryDetail($slug: String!) {
        category(where: {slug: $slug}) {
            name
            bgColor{
                hex
            }
            products(last: 1000) {
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
                    slug
                }
                image {
                    url
                }
            }
        }
    }`;

export default GetCategoryDetailQuery;