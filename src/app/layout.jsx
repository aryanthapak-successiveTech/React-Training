import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import BodyWrapper from "@/Components/BodyWrapper";
import HtmlWrapper from "@/Components/HtmlWrapper";
import { LanguageContextProvider } from "@/context/LanguageContext";
import Navbar from "@/Components/Navbar";
import { CartContextProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <LanguageContextProvider>
      <HtmlWrapper>
        <ThemeProvider>
          <BodyWrapper>
            <Navbar />
            <CartContextProvider>{children}</CartContextProvider>
          </BodyWrapper>
        </ThemeProvider>
      </HtmlWrapper>
    </LanguageContextProvider>
  );
}
