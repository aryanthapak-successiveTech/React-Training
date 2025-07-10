"use client";
import styles from "@/app/Assignment-3/styles/SideBar.module.css";
import {  useRouter } from "next/navigation";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const SideBar = () => {
  const { isLoggedIn, logOutUser } = useContext(LoginContext);
  const navigation = ["Question-1", "Question-2"];
  if (!isLoggedIn) {
    navigation.push("Login");
    navigation.push("Products");
  } else {
    navigation.push("Home");
    navigation.push("About");
    navigation.push("Dashboard");
  }
  const router = useRouter();
  return (
    <div className={styles["sideBar"]}>
      {navigation.map((nav, index) => (
        <div key={index}>
          <button
            className="navButton"
            onClick={() => {
              router.push(`/Assignment-3/${nav}`);
            }}
          >
            {nav}
          </button>
        </div>
      ))}
      {isLoggedIn && (
        <button className="navButton" onClick={logOutUser}>
          Log out
        </button>
      )}
    </div>
  );
};

export default SideBar;
