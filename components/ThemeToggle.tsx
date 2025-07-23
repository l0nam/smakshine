"use client";
import { MoonIcon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Sun className="size-4.5" /> : <MoonIcon className="size-4.5" />}
      </Button>
    </div>
  );
};
