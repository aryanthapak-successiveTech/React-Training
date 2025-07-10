
"use client";

import { ReactNode, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const BodyWrapper = ({ children }:{children:ReactNode}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <body className={`${theme}`}>
      {children}
    </body>
  );
};

export default BodyWrapper;
