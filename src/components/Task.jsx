const Task = ({ task, deleteTask, checkState }) => {
  return (
    <div
      className={`${task.check ? "taskcomplete" : "task"}`}
      onDoubleClick={() => {
        checkState(task.id);
      }}
    >
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
