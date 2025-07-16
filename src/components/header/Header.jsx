import { useEffect, useState, useCallback } from "react";
import Navigation from "../navigation-links/Navigation";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : null;
  });

  const applyThemeToDocument = useCallback((currentTheme) => {
    const element = document.documentElement;
    element.classList.remove("dark");
    if (currentTheme) {
      element.classList.add(currentTheme);
    }
  }, []);
  useEffect(() => {
    applyThemeToDocument(theme);
    localStorage.setItem("app-theme", theme);
  }, [theme, applyThemeToDocument]);
  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? "dark" : "";
    setTheme(newTheme);
  };

  return (
    <header className="header container flex-between-center mb-auto">
      <h1 className="header-logo text-xl font-bold cursor-pointer">John Doe</h1>
      <div className="flex align-center gap-2">
        <Navigation />
        <div className="toggleTheme flex align-center gap-05 text-xs">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox-input invisible"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          <label htmlFor="checkbox" className="checkbox-label"></label>
          <span>Dark 🌑</span>
        </div>
      </div>
    </header>
  );
}
