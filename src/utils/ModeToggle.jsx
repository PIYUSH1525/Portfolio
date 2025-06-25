import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./darkThemeProvider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button variant='icon' onClick={toggleTheme} className="p-2 cursor-pointer">
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
    );
};