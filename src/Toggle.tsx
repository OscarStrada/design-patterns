import useThemeContext from "./hooks/useThemeContext";


export default function Toggle() {
    const theme = useThemeContext();

    return (
        <label className="switch">
            <input type="checkbox" onClick={theme.toggleTheme} />
            <span className="slider round" />
        </label>
    );
}