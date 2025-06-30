"use client";
import useFetchData from "@/hooks/useFetchData";
import { useState } from "react";

const ClientRetryComponent = ({ error }) => {
  const { data, errors, fetchData } = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    {},
    error
  );

  return (
    <div className="flex-col">
      {!errors &&
        data.map((el, idx) => (
          <div key={idx} className="text-center">
            <p>Name : {el.name}</p>
            <p>
              Address :{" "}
              {`${el.address.street},${el.address.suite},${el.address.city}`}
            </p>
            <p>Phone : {el.phone}</p>
          </div>
        ))}

      {errors && (
        <div className="form">
          <p className="wrongInput">Failed to fetch the data</p>
          <button className="button" onClick={fetchData}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientRetryComponent;
