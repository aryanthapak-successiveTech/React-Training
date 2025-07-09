import React from "react";

interface AddressInterface {
  street: string;
  suite: string;
  city: string;
}

interface DataInterface {
  name: string;
  address: AddressInterface;
  phone: string;
}

export function withDataFetching<T>(
  WrappedComponent: React.ComponentType<T & { data: DataInterface[] }>
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
