"use client";
import React from "react";
import { Nav } from "@/components/custom_ui/nav";
import {
  Home,
  Archive,
  Trash2,
  Container,
  University,
  UsersRound,
  ShoppingBag,
} from "lucide-react";

import { useState } from "react";

type Props = {};

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <div>
      <div>
        <button onClick={toggleCollapse}>Toggle Collapse</button>
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
            href:"/inventory",
          },
          {
            title: "Department",
            label: "",
            icon: University,
            variant: "ghost",
            href: "/department",
          },
          {
            title: "Roles and Permission",
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
