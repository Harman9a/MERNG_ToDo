import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getClient {
    AllToDo {
      id
      name
    }
  }
`;

export { GET_TODOS };
