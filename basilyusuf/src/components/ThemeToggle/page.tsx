// // ThemeContext.tsx
// import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// interface ThemeContextType {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem('theme');
//     if (theme) {
//       setIsDarkMode(theme === 'dark');
//     } else {
//       setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//     localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       <div className={isDarkMode ? 'dark' : ''}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };
