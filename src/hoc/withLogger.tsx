"use client";
import { JSX, useEffect} from "react";

function withLogger<T extends object>(WrappedComponent:React.ComponentType<T>):React.FC<T>{
  return function LoggingOfComponents(props:T) {
    useEffect(() => {
      console.log("Mounted");

      return () => console.log("Unmounted");
    }, []);

    useEffect(() => {
      console.log("Updated");
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
