"use client"
import dynamic from "next/dynamic"

const LazyCounter=dynamic(()=>import("@/Components/Counter"),{
    loading:()=><p className="text-center">Loading...</p>,
    ssr:false
});

export default function LazyCounterApp(){
    return(
        <LazyCounter/>
    )
}