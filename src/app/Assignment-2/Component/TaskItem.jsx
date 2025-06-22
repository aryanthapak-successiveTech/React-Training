import styles from "@/app/Assignment-2/Styles/Todo.module.css";
const TaskItem = ({ task, completed, completeHandler }) => {
  return (
    <div className={styles["tasks"]}>
      <h3>{task}</h3>
      {!completed && <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="green"
        className="size-6"
        height="1.5rem"
        onClick={completeHandler}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>}
    </div>
  );
};

export default TaskItem;
