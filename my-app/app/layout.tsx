import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavBar from "@/components/custom_ui/SideNavBar";
import {Search}  from "@/components/custom_ui/Search";
import { UserNav } from "@/components/custom_ui/DropDownUser";
import Notification from "@/components/custom_ui/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "IOEPC Inventory Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body className={cn("min-h-screen w-full bg-white text-black")}>
    <div className="flex flex-row">
      <SideNavBar />
      <div className="flex flex-col flex-grow">
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
