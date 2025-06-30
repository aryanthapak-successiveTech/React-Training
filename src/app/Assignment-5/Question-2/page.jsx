import { use } from "react";
import ClientRetryComponent from "../Components/ClientRetryComponent";

const ShowData = () => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if(!res.ok){
        throw new Error("Failed to fetch")
      }
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  const dataOrError = use(fetchData());

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
      {Array.isArray(dataOrError) &&
        dataOrError.map((el, idx) => (
          <div key={idx} className="text-center">
            <p>Name : {el.name}</p>
            <p>
              Address :{" "}
              {`${el.address.street},${el.address.suite},${el.address.city}`}
            </p>
            <p>Phone : {el.phone}</p>
          </div>
        ))}

      {!Array.isArray(dataOrError) && (
        <ClientRetryComponent error={dataOrError.message}/>
      )}
    </div>
  );
};

export default ShowData;
