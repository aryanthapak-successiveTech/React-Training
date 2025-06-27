"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect } from "react";

const withDataFetching = (WrappedComponent) => {
  return function FetchedDataComponent(props) {
    const { data, fetchData } = useFetchData(
      "https://jsonplaceholder.typicode.com/users"
    );
    useEffect(() => {
      fetchData();
    },[]);

    return <WrappedComponent { ...props } data={data} />;
  };
};

export default withDataFetching;
