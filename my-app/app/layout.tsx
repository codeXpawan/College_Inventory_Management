import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavBar from "@/components/custom_ui/SideNavBar";
import Search_Bar from "@/components/custom_ui/search_bar";
import User from "@/components/custom_ui/User";
import Notification from "@/components/custom_ui/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory",
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
          <div className=" flex flex-col flex-grow">
            <div className="flex ">
              <Search_Bar />
              <div className=" flex ml-auto">
                <Notification />
                <User />
              </div>
            </div>
            <div className="p-8 w-full"> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
