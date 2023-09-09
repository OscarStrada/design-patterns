import useThemeContext from "./hooks/useThemeContext"

export default function ListItem() {
    const theme = useThemeContext()

    return (
        <li style={theme.theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
        </li>
    )
}