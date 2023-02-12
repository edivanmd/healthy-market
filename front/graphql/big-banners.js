import { gql } from '@apollo/client';

const GetBigBannersQuery = gql`
    query bigBanners {
        bigBanners {
            data {
                id
                attributes {
                title
                desc
                link
                btn_text
                bgcolor
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

export default GetBigBannersQuery;