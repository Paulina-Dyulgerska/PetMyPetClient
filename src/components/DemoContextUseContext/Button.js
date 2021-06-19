import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function Button({
}) {
    const themeContext = useContext(ThemeContext);
    // const [currentTheme, setCurrentTheme] = useContext(ThemeContext);

    const onButtonClickHandler = () => {
        themeContext.setCurrentTheme(oldTheme => oldTheme == 'dark' ? 'light' : 'dark');
        // setCurrentTheme(oldTheme => oldTheme == 'dark' ? 'light' : 'dark');
    }

    return (
        <button onClick={onButtonClickHandler}
            style={{
                backgroundColor: themeContext.currentTheme == 'dark' ? 'darkblue' : 'lightcoral',
                // backgroundColor: currentTheme == 'dark' ? 'darkblue' : 'lightcoral',
                color: 'white',
            }}>
            Theme Button in {themeContext.currentTheme}
            {/* Theme Button in {currentTheme} */}
        </button>
    )
}

export default Button;


