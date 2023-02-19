import { gql } from '@apollo/client';

const GetBestEmployeeQuery = gql`
    query GetBestEmployee {
        teamBestEmployees(last: 1) {
            role
            name
            description
            image {
                url
            }
        }
    }
  `;

export default GetBestEmployeeQuery;