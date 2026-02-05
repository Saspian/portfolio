import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme based on system preference or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark",
      );
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        ) : (
          <Sun className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        )}
      </button>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          {/* Name/Brand */}
          {/* <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 animate-slide-up">
              Your Name
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"></div>
          </div> */}

          {/* Launching Soon */}
          <div className="space-y-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-neutral-100 animate-slide-up delay-100 sm:whitespace-nowrap">
              Launching Soon
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-slide-up delay-100 mx-auto"></div>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light animate-slide-up delay-200">
            Yes! Its exactly what you think.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-4 animate-slide-up delay-300">
            <a
              href="https://github.com/Saspian"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-600 hover:scale-110 active:scale-95 hover:text-violet-500"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/saspian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-600 hover:scale-110 active:scale-95 hover:text-violet-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/saspiansparrow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-600 hover:scale-110 active:scale-95 hover:text-violet-500"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
