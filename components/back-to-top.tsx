"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MoveUp } from "lucide-react";

import { Button } from "./ui/button";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleBackToTopVisibility = () => {
      window.scrollY > 600 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleBackToTopVisibility);
    return () => {
      window.addEventListener("scroll", handleBackToTopVisibility);
    };
  }, []);
  return (
    <a
      onClick={scrollToTop}
      className={`${
        visible ? "visible opacity-100" : "invisible opacity-0"
      } fixed lg:bottom-8 lg:right-8 bottom-4 right-4 transition-all duration-300`}
    >
      <Button variant="outline" size="icon">
        <MoveUp className="h-4 w-4" />
      </Button>
    </a>
  );
}
