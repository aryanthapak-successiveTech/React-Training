"use client";

import axios from "axios";
import { useEffect, useState } from "react";


interface AddressInterface{
  street:string,
  suite:string,
  city:string
}

interface DataInterface{
  name:string,
  address:AddressInterface
  phone:string
}

const ClientRetryUsingAxios = ({ error }:{error:string}) => {
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
    }
  };

  useEffect(() => {
    if (!error) {
      fetchData();
    }

    else{
        setIsError(true);
    }
  }, [error]);

  return (
    <div className="flex-col">
      {!isError &&
        data.map((el:DataInterface, idx:number) => (
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

export default ClientRetryUsingAxios;
