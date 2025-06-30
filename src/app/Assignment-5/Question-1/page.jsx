import { use } from "react";

const ShowData = () => {
  const fetchData=async ()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        return data;
    }

    const data=use(fetchData());


  return (
    <div className="flex-col">
      <p>
        1. Create a Next.js component using the App Router that fetches data on
        the server side (SSR) from a public API (e.g., JSONPlaceholder) and
        displays the results on the page.
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
