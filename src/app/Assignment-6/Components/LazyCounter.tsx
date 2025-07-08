import dynamic from "next/dynamic"

const LazyCounter=dynamic(()=>import("@/Components/Counter"),{
    loading:()=><p>Loading</p>
});

export default function LazyCounterApp(){
    return(
        <LazyCounter/>
    )
}