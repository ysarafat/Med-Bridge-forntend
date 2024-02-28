/* eslint-disable no-use-before-define */
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

function ThemeMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme: string) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  };

  useEffect(() => {
    applyTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-2">
      <Switch onClick={toggleDarkMode} id="theme-mode" />
      <label htmlFor="theme-mode">{isDarkMode ? "Light" : "Dark"}</label>
    </div>
  );
}

export default ThemeMode;
