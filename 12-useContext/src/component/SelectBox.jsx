import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const SelectBox = () => {
    const {theme, updateTheme} = useContext(ThemeContext);

    return (
        <select className="px-3 py-2 pr-10 border border-blue-500 rounded-md focus:outline-none"
        onChange={(e) => updateTheme(e.target.value)}
        defaultValue={theme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}

export default SelectBox;