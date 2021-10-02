import Task from "./Task";
const Tasks = ({ tasks, deleteTask, onDoubleClick }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            checkState={onDoubleClick}
            deleteTask={deleteTask}
          />
        );
      })}
    </>
  );
};
export default Tasks;
