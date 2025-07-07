"use client"
import { useMemo, useState } from "react";


const Students=()=>{
    const [students,setStudents]=useState<string[]>(["Aryan","Aman","Adarsh"]);

    const memoStudents=useMemo<string[]>(()=>{
        return students;
    },[students])
    
    const addStudents=()=>{
        setStudents(prev=>[...prev,`Student ${students.length+1}`])
    }
    return(
        <div>
        {memoStudents.map((student,idx)=>{return <h1 key={idx}>{student}</h1>})}
        <button onClick={addStudents}>Add Student</button>
        </div>
    )
}

export default Students;