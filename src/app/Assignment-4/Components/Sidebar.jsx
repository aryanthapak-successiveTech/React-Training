"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="nav">
      {[
        "Question-1",
        "Question-2",
        "Question-3",
        "RegistrationForm",
        "Question-5",
        "Todo",
        "Search",
        "Temprature",
        "Question-10",
        "Question-11",
        "Question-12",
        "Question-13",
        "Question-14"
      ].map((text, index) => (
        <button
          key={index}
          className="subNavButton"
          onClick={() => {
            setOpen(false);
            router.push(`/Assignment-4/${text}`);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
