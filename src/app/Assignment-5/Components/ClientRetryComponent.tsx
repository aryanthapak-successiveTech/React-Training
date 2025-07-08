"use client";
import useFetchData from "@/hooks/useFetchData";


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


const ClientRetryComponent = ({ error }:{error:Error}) => {

  const { data, errors, fetchData } = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    {},
    error.message
  );

  return (
    <div className="flex-col">
      {!errors &&
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
