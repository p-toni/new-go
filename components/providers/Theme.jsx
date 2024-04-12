"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

function Theming({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Theming;

// create new nextjs project or go to my gitHub and use mine
// install all packages
//  don't install these

// "@editorjs/editorjs": "^2.28.1", X
// "@flaticon/flaticon-uicons": "^ X

// Like and subscribe
