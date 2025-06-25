import SubBar from "../Components/SubBar";

export default function RootLayout({ children }) {
  return (
    <div>
        <SubBar/>
        <main>{children}</main>
    </div>
  );
}
