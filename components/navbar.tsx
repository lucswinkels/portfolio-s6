"use client";

import * as React from "react";
import Link from "next/link";

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

export function Navbar() {
  // const projects = [
  //   {
  //     title: "Individual project",
  //     href: "/projects/individual-project",
  //   },
  //   {
  //     title: "International project",
  //     href: "/projects/international-project",
  //   },
  //   {
  //     title: "Group project",
  //     href: "/projects/group-project",
  //   },
  // ];
  return (
    <Container className="border-b fixed top-0 left-0 z-20 bg-background">
      <div className="w-full items-center justify-between flex py-4 lg:py-6">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a
                href="/files/reading-guide/reading-guide.pdf"
                className={navigationMenuTriggerStyle()}
                target="_blank"
              >
                Reading guide
              </a>
              {/* <NavigationMenuTrigger>Reading guides</NavigationMenuTrigger>
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
              </NavigationMenuContent> */}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Container>
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
