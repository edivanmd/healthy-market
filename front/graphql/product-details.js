import { gql } from '@apollo/client';

const GetProductDetail = gql`
query GetProductDetail {
    product {
        data {
            id
            attributes {
                name
                price
                old_price
                small_desc
                full_desc
                link
                is_new
                is_promo
                is_popular
                tag
                categories {
                    data{
                      id
                        attributes {
                        name
                        link
                      }
                    }
                }
                image {
                    data {
                        id
                        attributes {
                            url
                        }
                    }
                }
            }
        }
    }
}`;

export default GetProductDetail;