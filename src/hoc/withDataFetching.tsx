import React from "react";


export function withDataFetching<T>(
  WrappedComponent: React.ComponentType<T & { data: any }>
) {
  return async function FetchedDataComponent(props: Omit<T, "data">) {

    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store", 
    });
    const data = await res.json();

    return <WrappedComponent {...(props as T)} data={data} />;
  };
}

export default withDataFetching;
