import {gql } from '@apollo/client';

const GetSmallBannersQuery = gql`
    query smallBanners {
        smallBanners {
        data {
            id
            attributes {
            title
            subtitle
            link
            text_btn
            color
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

export default GetSmallBannersQuery;