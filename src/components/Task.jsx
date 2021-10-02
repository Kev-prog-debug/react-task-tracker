const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3 className="todo">{task.Todo}</h3>
      <p className="date">{task.date}</p>
      <input
        type="button"
        value="Delete"
        onClick={() => {
          deleteTask(task.id);
        }}
      />
    </div>
  );
};
export default Task;
