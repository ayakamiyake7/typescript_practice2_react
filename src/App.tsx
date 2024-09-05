import React, { useState } from "react";
import "./App.css";
import axios from "axios";
// import { Todo } from "./Todo";
// import { TodoType } from "./types/todo";
// import { Text } from "./Text";
// import { UserProfile } from "./UserProfile";
// import { User } from "./types/user";
import { UserCard } from "./components/UserCard";

// const user: User = {
//   name: "jakee",
//   hobbies: ["映画", "ゲーム"],
// };

const user = {
  id: 1,
  name: "jakee",
  email: "aaa@gmail.com",
  address: "hoge",
};

function App() {
  // const [todos, setTodos] = useState<Array<TodoType>>([]);

  // const onClickFetchData = () => {
  //   axios
  //     .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => {
  //       setTodos(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="App">
      {/* <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))} */}

      <UserCard user={user} />
    </div>
  );
}

export default App;
