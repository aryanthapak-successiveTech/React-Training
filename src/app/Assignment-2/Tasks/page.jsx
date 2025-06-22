"use client";
import { memo, useCallback, useState } from "react";
import TaskItem from "../Component/TaskItem";

const initialTasks = [
  { id: 1, name: "Task 1", completed: false },
  { id: 2, name: "Task 2", completed: false },
  { id: 3, name: "Task 3", completed: false },
  { id: 4, name: "Task 4", completed: false },
  { id: 5, name: "Task 5", completed: false },
];

const Tasks = () => {
  const [completeTasks, setCompleteTasks] = useState(initialTasks);

  const completeTask = useCallback((id) => {
    setCompleteTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <>
      {completeTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.name}
          completed={task.completed}
          completeHandler={() => completeTask(task.id)}
        />
      ))}
    </>
  );
};

export default memo(Tasks);
