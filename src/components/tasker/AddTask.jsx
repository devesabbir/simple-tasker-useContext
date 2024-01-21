import { useState } from "react";
import { useTaskDispatch } from "../../context/TaskContext";

export default function AddTask() {
  const [input, setInput] = useState("");
  const dispatch = useTaskDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    dispatch({
      type: "added",
      payload: input,
    });
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleInputChange}
        className="border mr-1 p-1"
        type="text"
        placeholder="Add new task"
      />
      <button onClick={handleAddTask} className="border px-2 py-1">
        Add
      </button>
    </div>
  );
}
