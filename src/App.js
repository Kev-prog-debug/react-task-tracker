import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import "./app.css";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Todo: "Learn React.js",
      date: "1 Oct 2021",
    },
    {
      id: 2,
      Todo: "Do the homeworks",
      date: "5 Oct 2021",
    },
  ]);
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
export default App;
