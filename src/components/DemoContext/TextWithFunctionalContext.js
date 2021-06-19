import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const TextWithFunctionalContext = ({

}) => {
    const themeContext = useContext(ThemeContext);
    //moga da destructuriram contexta daje:
    const { theme } = useContext(ThemeContext);

    console.log(themeContext.theme + ' Theme form context color - In paragraph');
    console.log(theme + ' Theme color - In paragraph');

    return (
        <p style={{ backgroundColor: themeContext.theme == 'dark' ? 'darkblue' : 'lightcoral', color: 'white' }}>

            Some cool paragraph for useContext through functional component and the current ThemeContext
        </p>
    )
}

export default TextWithFunctionalContext;