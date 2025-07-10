"use client"
import { useMemo, useState } from "react";

interface EmployeeInterface{
  name:string,
  salary:number,
}

const employeesData = [
  { name: "Employee 1", salary: 30000 },
  { name: "Employee 2", salary: 35000 },
  { name: "Employee 3", salary: 20000 },
  { name: "Employee 4", salary: 40000 },
];
const EmployeeAveragePage = () => {
  const [employees, setEmployees] = useState<EmployeeInterface[]>(employeesData);
  const memoAvgSalary= useMemo<number>(() => {
    const totalSalary:number = employees.reduce((acc,emp) => {
      return acc + emp.salary;
    }, 0);

    return (totalSalary) / (employees.length);
  }, [employees]);

  const addEmployees = () => {
    setEmployees((prev) => [
      ...prev,
      {
        name: `Employee ${employees.length + 1}`,
        salary: Math.floor(Math.random()*10)* 10000,
      },
    ]);
  };

  return(
    <div>
        <h3>Average Salary : ${memoAvgSalary}</h3>
        <button onClick={addEmployees}>Add Employees</button>
    </div>
  )
};

export default EmployeeAveragePage;
