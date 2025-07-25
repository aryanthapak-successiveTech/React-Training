"use client";
import { memo, useCallback, useState } from "react";
import Child from "../Component/Child";

const Counter3 = () => {
  const [count, setCount] = useState<number>(0);
  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return <Child count={count} increaseCount={increaseCount} resetCount={resetCount} />;
};

export default memo(Counter3);
