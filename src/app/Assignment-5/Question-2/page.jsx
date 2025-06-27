"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect } from "react";

const ShowData = () => {
  const { data, errors, fetchData } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-col">
      <p>
        {" "}
        Extend your Next.js component that fetches data from a public API
        (https://jsonplaceholder.typicode.com/users) using server-side rendering
        (SSR) with the App Router to handle errors gracefully. If the fetch
        request fails during SSR, display a user-friendly error message on the
        page. Additionally, provide a retry button so users can attempt to fetch
        the data again without reloading the entire page.
      </p>
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

export default ShowData;
