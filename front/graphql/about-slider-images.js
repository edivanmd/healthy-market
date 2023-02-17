import { gql } from '@apollo/client';

const GetAboutSliderImagesQuery = gql`
    query GetAboutSliders {
        aboutSliderImages(last: 1000) {
            image {
              id
              url
            }
        }
    }
  `;

export default GetAboutSliderImagesQuery;