import { ReactNode } from "react";
import SubBar from "../Components/SubBar";

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <div>
        <SubBar/>
        <main>{children}</main>
    </div>
  );
}
