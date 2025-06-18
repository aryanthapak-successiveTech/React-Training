import React from 'react'

const Assignment1 = () => {
   return (
    <div className={styles["main"]}>
      <h2>Question-1</h2>
      <Greeting />
      <h2>Question-2</h2>
      <button
        onClick={() => {
          router.push("Users");
        }}
      >
        Click Me
      </button>
      <h2>Question-3</h2>
      <button
        onClick={() => {
          router.push("Weather");
        }}
      >
        Click Me
      </button>
      <h2>Question-4</h2>
      <button
        onClick={() => {
          router.push("Counter");
        }}
      >
        Click Me
      </button>
      <h2>Question-5</h2>
      <button
        onClick={() => {
          router.push("TaskList");
        }}
      >
        Click Me
      </button>
      <h2>Question-6</h2>
      <button
        onClick={() => {
          router.push("Button");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Assignment1