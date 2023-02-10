import { gql } from '@apollo/client';

const GetAllProductsQuery = gql`
    query GetAllProducts {
        products {
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
    }
  `;

export default GetAllProductsQuery;