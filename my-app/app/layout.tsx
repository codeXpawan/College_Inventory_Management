"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavBar from "@/components/custom_ui/SideNavBar";
import {Search}  from "@/components/custom_ui/Search";
import { UserNav } from "@/components/custom_ui/DropDownUser";
import Notification from "@/components/custom_ui/Notification";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   description: "IOEPC Inventory Dashboard",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [MarginLeft, setMarginLeft] = useState<string>("");
  const marginLeft = (margin:string) => {setMarginLeft(margin)};

  useEffect(()=>{
    console.log("marginLeft",MarginLeft);
  },[MarginLeft])

  return (
<html lang="en">
  <body className={cn("h-screen w-full bg-white text-black")}>
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <div><SideNavBar handleMarginLeft = {marginLeft}/></div>
      
      <div className={`flex ${MarginLeft} flex-col flex-grow h-screen overflow-y-auto` }>
        <div className="flex justify-between items-center p-4">
          <Search />
          <div className="flex gap-2">
          <Notification />
          <UserNav />
          </div>
        </div>
        <div className="p-8 w-full"> {children}</div>
      </div>
    </div>
  </body>
</html>
  );
}
