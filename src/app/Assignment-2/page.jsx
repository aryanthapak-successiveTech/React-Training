"use client"
import { usePathname, useRouter } from "next/navigation";
import { QuestionsList } from "./Constant";
import styles from "@/app//Assignment-2/page.module.css"
const Home = () => {
    const pathName=usePathname();
    const router=useRouter();
  return (
    <div className={styles["main"]}>
      <h1>Assignment-2</h1>
      {QuestionsList.map((questionData, idx) => (
        <div key={idx} className={styles["main"]}>
        <h3>{questionData.question}</h3>
        <button onClick={()=>router.push(`${pathName}/${questionData.path}`)}>Click Me</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
