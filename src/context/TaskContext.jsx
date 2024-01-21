/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { initialTask, taskReducer } from "../reducers/TaskReducer";
import { useImmerReducer } from "use-immer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTask);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};

export const useTaskDispatch = () => {
  return useContext(TaskDispatchContext);
};
