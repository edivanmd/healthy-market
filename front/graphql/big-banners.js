import { gql } from '@apollo/client';

const GetBigBannersQuery = gql`
    query bigBanner {
        bigBanners {
            id
            title
            desc
            bgcolor
            btnText
            image {
                url
            }
        }
    }
  `;

export default GetBigBannersQuery;