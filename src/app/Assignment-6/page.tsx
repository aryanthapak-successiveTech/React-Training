"use client"
import { useRouter } from "next/navigation";

const Page = () => {
  const router=useRouter();
  return (
    <div className="flex-col">
      <h1>Assignment-6</h1>
      <h2>Question-1</h2>
      <p>Lazy Loading Component</p>
      <button className=".navButton" onClick={()=>router.push("/Assignment-6/Question-1")}>Click me</button>
    </div>
  );
};

export default Page;
