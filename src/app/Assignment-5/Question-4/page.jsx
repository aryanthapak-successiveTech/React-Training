"use client";
import useFetchData from "@/hooks/useFetchData";
import PaginationComp from "../Components/Pagination";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const ShowDataPage = () => {
  const { data, errors, loading, fetchData } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  const pageCount = Math.ceil(data.length / 3);
  const [shownData, setShownData] = useState([...data]);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setShownData(data);
    const startIdx = (page - 1) * 3;
    setShownData((prev) => prev.slice(startIdx, startIdx + 3));
  }, [page, data]);
  return (
    <div className="flex-col">
      <p>
        Build a Next.js component that fetches a large dataset from an API and
        displays it with pagination. Show a limited number of items per page and
        provide controls to navigate between pages. Use the native fetch and
        handle data fetching efficiently within the App Router
      </p>
      {loading && <Loader />}
      {!errors &&
        shownData.map((el, idx) => (
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
      <PaginationComp
        pageCount={pageCount}
        page={page}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ShowDataPage;
