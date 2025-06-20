"use client";
import Input from "@/Components/Input";
import { useEffect, useState } from "react";
import styles from "@/app/Assignment-2/Styles/Notification.module.css";
const Notification = () => {
  const [message, setMessage] = useState("");
  const [messageChanged, setMessageChanged] = useState(false);
  useEffect(()=>{
    let timer=setTimeout(() => {
      setMessageChanged(false);
    }, 5000);
    ()=>clearTimeout(timer);
  },[message])
  const onMessageChangeHandler = (event) => {
    if (event.target.value.length === 0) {
      return;
    }
    setMessage(event.target.value);
    setMessageChanged(true);
  };

  return (
    <div>
      <Input
        type="text"
        title="Enter a message"
        onChangeHandler={onMessageChangeHandler}
      />
      {messageChanged && (
        <div className={styles["message"]}>
          <p>Message changed</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
