import { gql } from '@apollo/client';

const GetSmallBannersQuery = gql`
    query smallBanner {
        smallBanners {
            id
            title
            subtitle
            color
            textBtn
            image {
                url
            }
        }
    }
  `;

export default GetSmallBannersQuery;