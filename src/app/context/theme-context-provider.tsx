import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkTheme, lightTheme } from "../config/theme-config";
import { createContext, useContext, useState } from "react";

type TodoThemeProps = {
    children: React.ReactNode;
}

type ThemeContextProps = {
    theme: string;
    setTheme: (theme: string) => void;
}

// Step 1: Create context with default values
const ThemeContextProvider = createContext<ThemeContextProps>({
    theme: 'light',
    setTheme: () => {},
});

const TodoTheme: React.FC<TodoThemeProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    // ✅ Step 2: Use createTheme() to build complete MUI Theme
    const appliedTheme = createTheme(
        theme.toLowerCase() === 'dark' ? darkTheme : lightTheme
    );

    return (
        <ThemeContextProvider.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={appliedTheme}>
                {children}
            </ThemeProvider>
        </ThemeContextProvider.Provider>
    );
}

export default TodoTheme;

// 🔄 Optional: export the context hook for components
export const useTodoTheme = () => useContext(ThemeContextProvider);
