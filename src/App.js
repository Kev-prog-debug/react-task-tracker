import AddTasks from "./components/AddTasks";
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
      check: false,
    },
    {
      id: 2,
      Todo: "Do the homeworks",
      date: "5 Oct 2021",
      check: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const addTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const setCheckState = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, check: !task.check } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTasks onAdd={addTasks} />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        onDoubleClick={setCheckState}
      />
    </div>
  );
};
export default App;
