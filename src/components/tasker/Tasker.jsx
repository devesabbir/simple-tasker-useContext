import { useTasks } from "../../context/TaskContext";
import AddTask from "./AddTask";
import Task from "./Task";

export default function Tasker() {
  const tasks = useTasks();

  let content = null;

  if (tasks.length === 0) {
    content = "No tasks available";
  }

  if (tasks.length > 0) {
    content = tasks.map((item) => <Task key={item.id} item={item} />);
  }

  return (
    <section className="w-80 text-center border mx-auto bg-slate-400">
      <h1 className="text-xl font-medium">Simple Tasker</h1>
      <AddTask />
      {content}
    </section>
  );
}
