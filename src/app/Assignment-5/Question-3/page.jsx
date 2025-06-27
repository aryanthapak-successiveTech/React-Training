"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect } from "react";
import Loader from "../Components/Loader";

const ShowData = () => {
  const { data, errors, loading, fetchData } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-col">
      <p>
        {" "}
        Enhance your Next.js component that fetches data from a public API by
        adding a loading indicator, such as a spinner. This indicator should be
        visible while the data is being fetched and hidden once the data has
        loaded successfully. Ensure the loading state is properly managed on the
        client side, especially when implementing retry functionality. Use the
        native fetch function and integrate this loading feedback seamlessly
        with the error handling and data display in your component.
      </p>
      {loading && <Loader />}
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
