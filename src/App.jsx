import Tasker from "./components/tasker/Tasker";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Tasker />
    </TaskProvider>
  );
}

export default App;
