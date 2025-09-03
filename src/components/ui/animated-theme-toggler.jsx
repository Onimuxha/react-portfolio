"use client";

import { useState, useEffect, useRef } from "react";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { flushSync } from "react-dom";
import { cn } from "../../../lib/utils";

export const AnimatedThemeToggler = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const buttonRef = useRef(null);

  // Load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const dark = storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    document.documentElement.classList.toggle("dark", dark);
    setIsDarkMode(dark);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", dark);
        setIsDarkMode(dark);
        localStorage.setItem("theme", dark ? "dark" : "light"); // persist theme
      });
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRad}px at ${x}px ${y}px)`],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      <div
        className={`relative h-5 w-5 transition-transform duration-500 sm:h-6 sm:w-6 ${
          isDarkMode ? "rotate-180" : "rotate-0"
        }`}
      >
        <IconMoonStars
          className={`absolute h-5 w-5 text-violet-400 transition-opacity duration-300 sm:h-6 sm:w-6 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <IconSun
          className={`absolute h-5 w-5 text-amber-500 transition-opacity duration-300 dark:text-yellow-300 sm:h-6 sm:w-6 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
};
