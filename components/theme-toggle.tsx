"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#303030] transition-colors z-50"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}

