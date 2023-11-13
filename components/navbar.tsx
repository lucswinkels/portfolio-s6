"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Container from "./container";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const projects = [
    {
      title: "Individual project",
      href: "/projects/individual-project",
    },
    {
      title: "International project",
      href: "/projects/international-project",
    },
    {
      title: "Group project",
      href: "/projects/group-project",
    },
  ];
  const closeMobileMenu = () => {
    setMobileMenuVisibility(false);
  };
  const handleMenuVisibility = () => {
    setMobileMenuVisibility(!mobileMenuVisibility);
  };
  const MobileMenuToggle = () => {
    return (
      <Button
        variant="outline"
        className="md:hidden flex"
        onClick={handleMenuVisibility}
      >
        Menu <Menu className="h-4 w-4 ml-2" strokeWidth={1} />
      </Button>
    );
  };
  const MobileMenu = () => {
    const MobileMenuLinkItems = [
      { title: "Burden of proof", href: "/burden-of-proof" },
      { title: "Individual project", href: "/projects/individual-project" },
      { title: "Group project", href: "/projects/group-project" },
      {
        title: "International project",
        href: "/projects/international-project",
      },
    ];
    const MobileMenuItemStyles = "basis-1/5 w-full px-6 flex items-center";
    return (
      <motion.div
        className={`md:hidden flex-col fixed top-20 left-0 z-40 w-full bg-background h-[calc(100vh-5rem)] justify-center ${
          mobileMenuVisibility ? "flex" : "hidden"
        } `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {MobileMenuLinkItems.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={cn(
              "font-semibold text-md border-b",
              MobileMenuItemStyles
            )}
            onClick={handleMenuVisibility}
          >
            {item.title}
          </Link>
        ))}
        <div className={cn("", MobileMenuItemStyles)}>
          <ModeToggle />
        </div>
      </motion.div>
    );
  };
  return (
    <>
      <MobileMenu />
      <Container className="border-b fixed top-0 left-0 z-50 bg-background">
        <div className="w-full items-center justify-between flex h-20 lg:h-24">
          <Logo onClick={closeMobileMenu} />
          <NavigationMenu>
            <MobileMenuToggle />
            <NavigationMenuList className="md:flex hidden">
              <NavigationMenuItem>
                <Link href="/burden-of-proof" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Burden of proof
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-max gap-3 p-4">
                    {projects.map((project, i) => (
                      <ListItem
                        key={i}
                        title={project.title}
                        href={project.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Container>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
