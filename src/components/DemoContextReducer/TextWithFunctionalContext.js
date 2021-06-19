import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const TextWithFunctionalContext = ({

}) => {
    const themeContext = useContext(ThemeContext);
    const [currentTheme, dispatch] = useContext(ThemeContext);

    console.log(currentTheme.backgroundColor + ' Theme form context backgroundColor color - In paragraph');
    console.log(currentTheme.color + ' Theme form context color - In paragraph');

    return (
        <p style={{
            // backgroundColor: currentTheme.backgroundColor == 'darkblue' ? 'lightcoral' : 'darkblue',
            backgroundColor: currentTheme.backgroundColor,
            // color: currentTheme.backgroundColor == 'dark' ? 'white' : 'grey',
            color: currentTheme.color,
        }}>
            Some cool paragraph for useContext through functional component and the current ThemeContext
        </p>
    )
}

export default TextWithFunctionalContext;