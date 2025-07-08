import { JSX, use} from "react";

function withDataFetching<T extends JSX.IntrinsicAttributes>(WrappedComponent:React.ComponentType<T>){
  return function FetchedDataComponent(props:T) {
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
