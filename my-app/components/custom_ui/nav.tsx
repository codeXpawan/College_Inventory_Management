"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
    submenu?: boolean;
    subicon?: LucideIcon;
    subMenuItems?: {
      title: string;
      label?: string;
      icon: LucideIcon;
      variant: "default" | "ghost";
      href: string;
    }[];
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleSubMenu = (index: number) => {
    setDropdownOpen(!dropdownOpen);
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-3 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col">
              {isCollapsed ? (
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        buttonVariants({
                          variant: link.href === pathname ? "default" : "ghost",
                          size: "icon",
                        }),
                        "h-9 w-20",
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      )}
                      onClick={
                        link.submenu
                          ? (e) => {
                              e.preventDefault();
                              toggleSubMenu(index);
                            }
                          : undefined
                      }
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </TooltipTrigger>
                </Tooltip>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: link.href === pathname ? "default" : "ghost",
                      size: "sm",
                    }),
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "justify-start"
                  )}
                  onClick={
                    link.submenu
                      ? (e) => {
                          e.preventDefault();
                          toggleSubMenu(index);
                        }
                      : undefined
                  }
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                  {link.subicon ? <link.subicon className={dropdownOpen ? "ml-2 rotate-180" : "ml-2"} /> : null}

                  {link.label && (
                    <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                          "text-background dark:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                  )}
                </Link>
              )}
              {link.submenu && openSubMenuIndex === index && (
                <div className="ml-5 mt-2 space-y-2 flex flex-col">
                  {link.subMenuItems?.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={cn(
                        buttonVariants({
                          variant:
                            subItem.href === pathname ? "default" : "ghost",
                          size: isCollapsed ? "icon" : "sm",
                        }),
                        subItem.variant === "default" &&
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                        "justify-center"
                      )}
                    >
                      <subItem.icon className="h-4 w-4" />
                      {isCollapsed ? (
                        <span className="sr-only ">{subItem.title}</span>
                      ) : (
                        subItem.title
                      )}

                      {subItem.label && (
                        <span
                          className={cn(
                            "ml-auto",
                            subItem.variant === "default" &&
                              "text-background dark:text-white"
                          )}
                        >
                          {subItem.label}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </TooltipProvider>
  );
}
