import { useState, useReducer } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Toolbar from './Toolbar';

const DemoContext = ({
}) => {
    const [currentTheme, setCurrentTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
        {/* <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}> */}
            <Toolbar />
        </ThemeContext.Provider >
    )
}

export default DemoContext;