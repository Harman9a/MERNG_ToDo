import React, { useEffect, useState } from "react";
import { List, Skeleton } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_TODO } from "../GraphQL/Mutation";
import { GET_TODOS } from "../GraphQL/Query";

const ToDoList = ({ loadingToDo, ToDoData }) => {
  const { loading, data } = useQuery(GET_TODOS);
  const [initLoading, setInitLoading] = useState(true);
  const [activeID, setActiveID] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    setInitLoading(loadingToDo);

    setList(ToDoData);
  }, [ToDoData]);

  const [deleteTodo] = useMutation(DELETE_TODO);

  const handleDelete = async (id) => {
    try {
      setActiveID(id);
      await deleteTodo({
        variables: {
          id: id,
        },
        update: (cache) => {
          const existingTodos = cache.readQuery({
            query: GET_TODOS,
          });

          const updatedTodos = existingTodos.AllToDo.filter(
            (todo) => todo.id !== id
          );

          cache.writeQuery({
            query: GET_TODOS,
            data: {
              AllToDo: updatedTodos,
            },
          });
        },
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      dataSource={loading == false ? data.AllToDo : []}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-delete" onClick={() => handleDelete(item.id)}>
              Delete
            </a>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta title={item.name} />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default ToDoList;
