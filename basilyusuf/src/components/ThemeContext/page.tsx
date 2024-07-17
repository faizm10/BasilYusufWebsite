// components/ThemeSwitch.tsx
'use client';

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme">
      <button onClick={toggleTheme}>
      {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
