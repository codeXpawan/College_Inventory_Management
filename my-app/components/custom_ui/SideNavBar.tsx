"use client";
import React, { useEffect } from "react";
import { Nav } from "@/components/custom_ui/nav";
import {
  Home,
  Container,
  University,
  UsersRound,
  ShoppingBag,
  ArrowLeft,
  Settings,
  Proportions,
  ChevronLeft,
  LogOut,
  ListChecks,
} from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { title } from "process";
import { useWindowWidth } from "@react-hook/window-size";
import { on } from "events";

type Props = {};

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [onlyWidth, setOnlyWidth] = useState(0);
  useEffect(() => {
    setIsClient(true);
    setOnlyWidth(window.innerWidth);
    const handleResize = () => setOnlyWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileWidth = onlyWidth < 768;
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <div className="relative max-w-xs h-screen  gap-4 px-2  bg-[#D9D9D9]">
      {isCollapsed ? (
        <Image
          src="/image.svg"
          alt="IOEPC image"
          width={70}
          height={70}
          className="my-4"
        />
      ) : (
        <Image
          src="/Logo.svg"
          alt="IOEPC Logo"
          width={200}
          height={200}
          className="my-4"
        />
      )}

      <div className="absolute top-20 right-[1px]">
        <ChevronLeft
          onClick={toggleCollapse}
          className="cursor-pointer border-1 rounded-x"
        />
      </div>
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: Home,
            variant: "default",
            href: "/dashboard",
          },
          {
            title: "Inventory",
            label: "",
            icon: Container,
            variant: "ghost",
            href: "/inventory",
            submenu: true,
            subMenuItems: [
              {
                title: "Add item",
                label: "",
                icon: UsersRound,
                variant: "ghost",
                href: "/inventory/add_item",
              },
            ],
          },
          {
            title: "Department",
            label: "",
            icon: University,
            variant: "ghost",
            href: "/department",
          },
          {
            title: "Reports",
            label: "",
            icon: Proportions,
            variant: "ghost",
            href: "/reports",
          },
          {
            title: "Roles and Permissions",
            label: "",
            icon: UsersRound,
            variant: "ghost",
            href: "/roles_and_access",
          },
          {
            title: "Orders",
            label: "",
            icon: ShoppingBag,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Manage Store",
            label: "",
            icon: ListChecks,
            variant: "ghost",
            href: "/manage_store",
          },
        ]}
      />
      <div className="absolute bottom-0 ">
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Settings",
              label: "",
              icon: Settings,
              variant: "ghost",
              href: "/settings",
            },
            {
              title: "logout",
              label: "",
              icon: LogOut,
              variant: "ghost",
              href: "/logout",
            },
          ]}
        />
      </div>
    </div>
  );
}
