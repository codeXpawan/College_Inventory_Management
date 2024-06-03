import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavBar from "@/components/custom_ui/SideNavBar";

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
      <body className={cn("min-h-screen w-full bg-white text-black flex")}>
      
        <SideNavBar />
        <div className="p-8 w-full"> {children}</div>
      </body>
    </html>
  );
}
