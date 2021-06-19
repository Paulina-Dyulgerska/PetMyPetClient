import { useState, useReducer } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Toolbar from './Toolbar';

const DemoContext = ({
}) => {
    // const [currentTheme, setCurrentTheme] = useState({
    //     color: 'dark',
    //     fontSize: '45px',
    // });

    const initialState = {
        color: 'grey',
        backgroundColor: 'darkblue',
        fontSize: '45px',
        fontStyle: 'italic',
    }

    const themeReducer = (state, action) => {
        // return { ...state, color: 'white' };
        // return { ...state, backgroundColor: action };
        switch (action.type) {
            case 'CHANGE_COLOR':
                return { ...state, color: action.payload };
            case 'CHANGE_BACKGROUND':
                return { ...state, backgroundColor: action.payload };
            case 'CHANGE_FONT':
                return { ...state, fontSize: action.payload };
            case 'INCREASE_SIZE':
                return { ...state, fontSize: state.fontSize + 3 };
            default:
                return state;
        }
    }

    const [currentTheme, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={[currentTheme, dispatch]}>
            <Toolbar />
        </ThemeContext.Provider >
    )
}

export default DemoContext;