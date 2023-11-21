"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Home,
  Menu,
  Palette,
  Table,
  User,
  Users,
  X,
} from "lucide-react";

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
  const navItems = [
    {
      title: "Burden of proof",
      href: "/burden-of-proof",
    },
    {
      title: "Individual project",
      href: "/projects/individual-project",
    },
    {
      title: "Group project",
      href: "/projects/group-project",
    },
    {
      title: "International project",
      href: "/projects/international-project",
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
        size="icon"
        className="lg:hidden flex"
        onClick={handleMenuVisibility}
      >
        {mobileMenuVisibility ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>
    );
  };
  const MobileMenu = () => {
    const IconStyles = "mr-4 h-6 w-6 text-foreground";
    const MobileMenuLinkItems = [
      {
        icon: <Home className={IconStyles} />,
        title: "Home",
        href: "/",
      },
      {
        icon: <Table className={IconStyles} />,
        title: "Burden of proof",
        href: "/burden-of-proof",
      },
      {
        icon: <User className={IconStyles} />,
        title: "Individual project",
        href: "/projects/individual-project",
      },
      {
        icon: <Users className={IconStyles} />,
        title: "Group project",
        href: "/projects/group-project",
      },
      {
        icon: <Globe className={IconStyles} />,
        title: "International project",
        href: "/projects/international-project",
      },
      {
        icon: <Github className={IconStyles} />,
        title: "Source code (GitHub)",
        href: "https://github.com/lucswinkels/portfolio-s6",
        external: true,
      },
    ];
    const MobileMenuItemStyles =
      "h-14 w-full flex items-center border-b text-sm";
    return (
      <div
        className={`lg:hidden px-6 md:px-[10%] font-medium flex-col fixed top-20 left-0 z-40 w-full bg-background h-[calc(100vh-5rem)] ${
          mobileMenuVisibility ? "flex" : "hidden"
        } `}
      >
        {MobileMenuLinkItems.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={cn("dark:text-muted-foreground", MobileMenuItemStyles)}
            onClick={handleMenuVisibility}
          >
            {item.icon}
            {item.title}
            {item.external && (
              <ExternalLink className="h-4 w-4 ml-2 dark:text-foreground" />
            )}
          </Link>
        ))}
        <div className={cn("justify-between", MobileMenuItemStyles)}>
          <div className="flex">
            <Palette className={IconStyles} />
            <p className="dark:text-muted-foreground">Theme</p>
          </div>
          <ModeToggle variant="outline" />
        </div>
      </div>
    );
  };
  return (
    <>
      <MobileMenu />
      <Container className="border-b fixed top-0 left-0 z-50 bg-background">
        <div className="w-full items-center justify-between flex h-20 lg:h-24">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex lg:mr-8">
                <Logo onClick={closeMobileMenu} />
              </NavigationMenuItem>
              <div className="lg:flex items-center hidden gap-8">
                {navItems.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors leading-none">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <MobileMenuToggle />
            <NavigationMenuList className="lg:flex hidden">
              <NavigationMenuItem>
                <Button variant="ghost" size="icon">
                  <a
                    href="https://github.com/lucswinkels/portfolio-s6"
                    target="_blank"
                  >
                    <Github className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle variant="ghost" />
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
