const TaskList = (props) => {
  const tasks = [...props.tasks];
  return (
    <div>
      {tasks.length != 0 ? 
        <ol>
          {tasks.map((task) => <li key={task}>{task}</li>)}
        </ol>
       : 
        <p>No tasks pending</p>
      }
    </div>
  );
};

export default TaskList;
