import { use} from "react";

const withDataFetching = (WrappedComponent) => {
  return function FetchedDataComponent(props) {
     const fetchData=async ()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await res.json();
            return data;
        }
    
        const data=use(fetchData());
    

    return <WrappedComponent { ...props } data={data} />;
  };
};

export default withDataFetching;
