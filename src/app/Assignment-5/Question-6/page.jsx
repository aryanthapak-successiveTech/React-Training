"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const ShowData = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {
      setIsError(false);
      const fetchedData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (fetchedData.status != 200) {
        throw new Error("Failed to fetch");
      }

      setData(fetchedData.data);
    } catch (err) {
      setIsError(true);
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-col">
      <p>
        {" "}
        Modify your previous Next.js Server Component that fetches data with
        Axios to include error handling. If the request fails, display an error
        message and provide a retry button so the user can attempt fetching the
        data again. Implement the retry logic in a Client Component to handle
        user interaction.
      </p>
      {!isError &&
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

      {isError && (
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
