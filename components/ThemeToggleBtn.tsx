"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="flex items-center gap-3 p-3 cursor-pointer aspect-square rounded-[10px] font-semibold text-background bg-foreground"
    >
      <Sun className="block dark:hidden dark:scale-0 scale-100 transition-transform duration-300 w-5 h-5" />
      <Moon className="hidden dark:block dark:scale-100 scale-0 transition-transform duration-300 w-5 h-5" />
    </button>
  );
}
