import { use } from "react";
import axios from "axios";

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

const ShowData = () => {

  const fetchData = async () => {
    const fetchedData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return fetchedData.data;
  };
  
  const data:DataInterface[]=use(fetchData());

  return (
    <div className="flex-col">
      <p>
        Create a Next.js component that fetches data from a public API (like
        JSONPlaceholder) using Axios and displays the results on the page. Use
        the App Router conventions and perform the data fetching on the server
        side.
      </p>
      {data.map((el, idx) => (
        <div key={idx} className="text-center">
          <p>Name : {el.name}</p>
          <p>
            Address :{" "}
            {`${el.address.street},${el.address.suite},${el.address.city}`}
          </p>
          <p>Phone : {el.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
