import TaskList from "../Component/TaskList";

const TaskListPage=()=>{
  const tasks=["Task 1","Task 2","Task 3","Task 4"];
  return(
    <TaskList tasks={tasks}/>
  )
}

export default TaskListPage;