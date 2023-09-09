import { useState } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

interface Theme {
    background: string;
    color: string;
}

const themes: Record<string, Theme> = {
    light: {
        background: "#fff",
        color: "#000",
    },
    dark: {
        background: "#171717",
        color: "#fff",
    },
};

interface ThemeProviderProps {
    children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState("dark")

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const providerValue = {
        theme: themes[theme],
        toggleTheme
    }

    return (
        <div className={`theme-${theme}`}>
            <ThemeContext.Provider value={providerValue}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}
