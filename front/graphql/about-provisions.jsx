import { gql } from '@apollo/client';

const GetAboutProvisionsQuery = gql`
    query GetAboutProvisions {
        aboutProvisions(last: 1000) {
            icon {
              url
            }
            title
            description
        }
    }
  `;

export default GetAboutProvisionsQuery;