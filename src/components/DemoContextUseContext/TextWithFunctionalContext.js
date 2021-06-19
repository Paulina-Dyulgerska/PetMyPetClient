import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const TextWithFunctionalContext = ({

}) => {
    const themeContext = useContext(ThemeContext);
    const { currentTheme } = useContext(ThemeContext);

    console.log(themeContext.currentTheme + ' Theme form context color - In paragraph');
    console.log(currentTheme + ' Theme color - In paragraph');

    return (
        <p style={{
            backgroundColor: themeContext.currentTheme == 'dark' ? 'darkblue' : 'lightcoral',
            color: 'white',
        }}>
            Some cool paragraph for useContext through functional component and the current ThemeContext
        </p>
    )
}

export default TextWithFunctionalContext;