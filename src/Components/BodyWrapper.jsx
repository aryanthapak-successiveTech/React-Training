
"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const BodyWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <body className={`${theme}`}>
      {children}
    </body>
  );
};

export default BodyWrapper;
