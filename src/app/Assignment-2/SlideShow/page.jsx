"use client";
import styles from "@/app/Assignment-2/Styles/Slideshow.module.css";
import { useEffect, useState } from "react";
const images = [
  "/image-1.jpeg",
  "/image-2.jpeg",
  "/image-3.jpeg",
  "/image-4.jpeg",
  "/image-5.jpeg",
  "/image-6.jpeg",
  "/image-7.jpeg",
  "/image-8.jpeg",
  "/image-9.jpeg",
  "/image-10.jpeg",
];

const SlideShow = () => {
  const [timeInterval, setTimeInterval] = useState(1000);
  const [isPaused, setIsPaused] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < images.length - 1 && !isPaused) {
      let timer = setTimeout(() => {
        setIndex(index + 1);
      }, timeInterval);

      return function () {
        clearTimeout(timer);
      };
    }
  }, [index, isPaused, timeInterval]);

  const pauseHandler = () => {
    setIsPaused(true);
  };

  const playHandler = () => {
    setIsPaused(false);
  };

  const intervalHandler = (event) => {
    setTimeInterval(event.target.value * 1000);
  };

  return (
    <div className={styles["player"]}>
      <img className={styles["images"]} src={images[index]} />

      <div className={styles["options"]}>
        <select onClick={intervalHandler}>
          <option value={1}>1 sec</option>
          <option value={2}>2 sec</option>
          <option value={3}>3 sec</option>
        </select>
        <button onClick={playHandler} className={styles["playbtn"]}>play</button>
        <button onClick={pauseHandler} className={styles["pausebtn"]}>pause</button>
      </div>
    </div>
  );
};

export default SlideShow;
