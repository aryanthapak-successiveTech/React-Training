"use client";
import { useRouter } from "next/navigation";

const SubBar = () => {
  const router = useRouter();
  return (
    <div className="subBar">
      <button onClick={() => router.push("/Assignment-3/Dashboard")} className="subNavButton">
        Dashboard
      </button>
      <button onClick={() => router.push("/Assignment-3/Dashboard/Profile")} className="subNavButton">
        Profile
      </button>
      <button onClick={() => router.push("/Assignment-3/Dashboard/Settings")} className="subNavButton">
        Settings
      </button>
    </div>
  );
};

export default SubBar;
