import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ToDoList from "../components/ToDoList";
import { GET_TODOS } from "../GraphQL/Query";

const Home = () => {
  const [toDoListArr, setToDoListArr] = useState([]);
  const [toDoLoading, setToDoLoading] = useState(true);
  const { loading, data } = useQuery(GET_TODOS);

  useEffect(() => {
    if (data !== undefined) {
      setToDoListArr(data.AllToDo);
      setToDoLoading(loading);
    }
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ width: "50%" }}>
        <ToDoList loadingToDo={toDoLoading} ToDoData={toDoListArr} />
      </div>
    </div>
  );
};

export default Home;
