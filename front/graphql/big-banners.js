import { gql } from '@apollo/client';

const GetBigBannersQuery = gql`
    query bigBanner {
        bigBanners {
            id
            title
            desc
            slug
            bgColor {
                hex
            }
            btnText
            image {
                url
            }
        }
    }
  `;

export default GetBigBannersQuery;