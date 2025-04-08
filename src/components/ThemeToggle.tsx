
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        "rounded-full w-10 h-10 transition-all",
        theme === 'dark' ? 'bg-secondary' : 'bg-secondary',
      )}
    >
      <Sun className={cn("h-5 w-5 transition-all", theme === 'light' ? 'opacity-100' : 'opacity-0 rotate-90 scale-0')} />
      <Moon className={cn("h-5 w-5 absolute transition-all", theme === 'dark' ? 'opacity-100' : 'opacity-0 -rotate-90 scale-0')} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
