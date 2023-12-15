import { gql } from "@apollo/client";

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      name
    }
  }
`;
export { DELETE_TODO };
