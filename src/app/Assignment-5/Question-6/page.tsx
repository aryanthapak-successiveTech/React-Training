import axios from "axios";
import ClientRetryUsingAxios from "../Components/ClientRetryUsingAxios";
import { use } from "react";

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
    try {

      const fetchedData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (fetchedData.status != 200) {
        throw new Error("Failed to fetch");
      }

      return fetchedData.data;
    } catch (err) {
      return err;
    }
  };
  
  const dataOrError:DataInterface[]|Error=use(fetchData());
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
        <ClientRetryUsingAxios error={dataOrError.message}/>
      )}
    </div>
  );
};

export default ShowData;
