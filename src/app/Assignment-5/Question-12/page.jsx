"use client";
import withDataFetching from "@/hoc/withDataFetching";

const Page = ({ data }) => {
  return (
    <div className="flex-col">
      <p className="text-center">
        Create a higher-order component (HOC) named withDataFetching where the
        data fetching happens in a Server Component using SSR. The fetched data
        should then be passed as props to a Client Component wrapped by the HOC,
        which displays the data.
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

export default withDataFetching(Page);
