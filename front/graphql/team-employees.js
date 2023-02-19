import { gql } from '@apollo/client';

const GetAllEmployeesQuery = gql`
    query allEmployees {
        teamEmployees(last: 1000) {
            name
            role
            image {
                url
            }
        }
    }
  `;

  export default GetAllEmployeesQuery;