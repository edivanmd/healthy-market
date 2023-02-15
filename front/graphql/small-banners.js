import { gql } from '@apollo/client';

const GetSmallBannersQuery = gql`
    query smallBanner {
        smallBanners {
            id
            title
            subtitle
            slug
            bgColor {
                hex
            }
            textBtn
            image {
                url
            }
        }
    }
  `;

export default GetSmallBannersQuery;