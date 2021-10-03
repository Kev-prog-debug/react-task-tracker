import { useState } from "react";
const AddTasks = ({ onAdd }) => {
  const [Todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ Todo, date, check });
    setTodo("");
    setDate("");
    setCheck("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={Todo}
        onChange={(e) => {
          console.log(e);
          setTodo(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="date">Date</label>
      <br />

      <input
        type="text"
        id="date"
        placeholder="DD // MM // YY "
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="checkbox"
        value={check}
        onChange={(e) => {
          setCheck(e.currentTarget.checked);
        }}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};
export default AddTasks;
