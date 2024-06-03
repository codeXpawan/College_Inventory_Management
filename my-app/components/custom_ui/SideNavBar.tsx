"use client";
import React from "react";
import { Nav } from "@/components/custom_ui/nav";
import {
  Home,
  Container,
  University,
  UsersRound,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

import { useState } from "react";

type Props = {};

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <div className="flex flex-col items-center relative h-full">
      <Image
        src="/Logo.svg"
        alt="IOEPC Logo"
        width={200}
        height={200}
        className="my-4"
      />
      <div className="absolute top-20 right-0">
        <ArrowLeft onClick={toggleCollapse} className="cursor-pointer border-2 rounded-xl" />
      </div>

      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: Home,
            variant: "default",
            href: "/",
          },
          {
            title: "Inventory",
            label: "",
            icon: Container,
            variant: "ghost",
            href: "/inventory",
          },
          {
            title: "Department",
            label: "",
            icon: University,
            variant: "ghost",
            href: "/department",
          },
          {
            title: "Roles and Permissions",
            label: "",
            icon: UsersRound,
            variant: "ghost",
            href: "/roles",
          },
          {
            title: "Orders",
            label: "",
            icon: ShoppingBag,
            variant: "ghost",
            href: "/orders",
          },
        ]}
      />
    </div>
  );
}
