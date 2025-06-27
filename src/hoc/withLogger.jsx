"use client";
import { useEffect} from "react";

const withLogger = (WrappedComponent) => {
  return function LoggingOfComponents(props) {
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
