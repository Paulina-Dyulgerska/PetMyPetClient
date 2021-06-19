import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function Button({
}) {
    const themeContext = useContext(ThemeContext);
    const [currentTheme, dispatch] = useContext(ThemeContext);

    const onButtonClickHandler = () => {
        // dispatch(currentTheme.backgroundColor == 'darkblue' ? 'lightcoral' : 'darkblue');
        dispatch({
            type: 'CHANGE_BACKGROUND',
            payload: currentTheme.backgroundColor == 'darkblue' ? 'lightcoral' : 'darkblue',
        });
        dispatch({
            type: 'CHANGE_COLOR',
            payload: currentTheme.backgroundColor == 'darkblue' ? 'white' : 'grey',
        });
    }

    return (
        <button onClick={onButtonClickHandler}
            style={{
                // backgroundColor: currentTheme.backgroundColor == 'darkblue' ? 'lightcoral' : 'darkblue',
                backgroundColor: currentTheme.backgroundColor,
                // color: currentTheme.backgroundColor == 'dark' ? 'white' : 'grey',
                color: currentTheme.color,
            }}>
            Theme Button in {currentTheme.backgroundColor}
            {/* Theme Button in {currentTheme} */}
        </button>
    )
}

export default Button;


