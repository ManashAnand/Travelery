import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travelery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full  flex justify-center items-center ">
          <div className=" w-[90%]  flex justify-center items-center flex-col ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
